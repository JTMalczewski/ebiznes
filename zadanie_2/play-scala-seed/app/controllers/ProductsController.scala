package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import play.api.libs.json._
import scala.collection.mutable
import models.ProdListItem
import models.NewProdItem

@Singleton
class ProductsController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {
    private val prodList = new mutable.ListBuffer[ProdListItem]()
    prodList += ProdListItem(1, "apple", false, "fruit")
    prodList += ProdListItem(2, "bannana", true, "fruit")
    prodList += ProdListItem(3, "baguette", true, "bread")
    prodList += ProdListItem(4, "carrot", true, "vegetable")
    
    implicit val prodListJson = Json.format[ProdListItem]
    implicit val newProdJson = Json.format[NewProdItem]

    def getAll(): Action[AnyContent] = Action {
        if (prodList.isEmpty) {
            NoContent
        } else {
            Ok(Json.toJson(prodList))
        }
    }
    def getById(itemId: Long) = Action {
        val foundItem = prodList.find(_.id == itemId)
        foundItem match {
            case Some(item) => Ok(Json.toJson(item))
            case None => NotFound
        }
    }

    def addToBasketById(itemId: Long) = Action {
        val foundItem = prodList.find(_.id == itemId)
        foundItem match {
            case Some(item) => {
                val updatedItem = item.copy(inBasket = true)
                prodList -= item
                prodList += updatedItem
                Ok(Json.toJson(updatedItem))
            }
            case None => NotFound
        }
    }

    def removeFromBasketById(itemId: Long) = Action {
        val foundItem = prodList.find(_.id == itemId)
        foundItem match {
            case Some(item) => {
                val updatedItem = item.copy(inBasket = false)
                prodList -= item
                prodList += updatedItem
                Ok(Json.toJson(updatedItem))
            }
            case None => NotFound
        }
    }

    def deleteById(itemId: Long) = Action {
        val foundItem = prodList.find(_.id == itemId)
        foundItem match {
            case Some(item) => {
                prodList -= item
                NoContent
            }
            case None => NotFound
        }
    }

    def addNewItem() = Action { 
        implicit request => 
            val content = request.body 
            val jsonObject = content.asJson 
            val prodItem: Option[NewProdItem] = 
            jsonObject.flatMap( 
                Json.fromJson[NewProdItem](_).asOpt 
            )
        prodItem match {
            case Some(newItem) =>
                val nextId = prodList.map(_.id).max + 1
                val toBeAdded = ProdListItem(nextId, newItem.prodcutName, false, newItem.category)
                prodList += toBeAdded
                Created(Json.toJson(toBeAdded))
            case None =>
                BadRequest
        }
}

}