package main

import (
	"net/http"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/labstack/echo/v4"
)

type Product struct {
	gorm.Model
	Name  string  `gorm:"type:varchar(100);not null" json:"name"`
	Price float64 `gorm:"not null" json:"price"`
}

var db *gorm.DB

func init() {
	var err error
	db, err = gorm.Open("mysql", "root:admin@/produkty_app?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&Product{})
}

func createProduct(c echo.Context) error {
	product := new(Product)
	if err := c.Bind(product); err != nil {
		return err
	}
	db.Create(&product)
	return c.JSON(http.StatusCreated, product)
}

func getProducts(c echo.Context) error {
	var products []Product
	db.Find(&products)
	return c.JSON(http.StatusOK, products)
}

func getProduct(c echo.Context) error {
	id := c.Param("id")
	var product Product
	db.First(&product, id)
	return c.JSON(http.StatusOK, product)
}

func updateProduct(c echo.Context) error {
	id := c.Param("id")
	var product Product
	db.First(&product, id)
	if err := c.Bind(&product); err != nil {
		return err
	}
	db.Save(&product)
	return c.JSON(http.StatusOK, product)
}

func deleteProduct(c echo.Context) error {
	id := c.Param("id")
	var product Product
	db.First(&product, id)
	db.Delete(&product)
	return c.NoContent(http.StatusNoContent)
}

func main() {
	e := echo.New()

	e.POST("/products", createProduct)
	e.GET("/products", getProducts)
	e.GET("/products/:id", getProduct)
	e.PUT("/products/:id", updateProduct)
	e.DELETE("/products/:id", deleteProduct)

	e.Logger.Fatal(e.Start(":1323"))
}
