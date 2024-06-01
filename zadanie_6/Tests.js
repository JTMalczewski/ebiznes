var webdriver = require("selenium-webdriver");
var jasmine = require('jasmine');
const { Builder, By, Key, until } = require('selenium-webdriver');

async function TestAddRem(product) {
    var numberOfProducts = await browser.findElement(By.id(`${product}_bucket`)).getText();
    expect(numberOfProducts).toBe('0');
    await browser.findElement(By.id(`${product}_buttons_add`)).click();
    await browser.findElement(By.id(`${product}_buttons_add`)).click();
    numberOfProducts = await browser.findElement(By.id(`${product}_bucket`)).getText();
    expect(numberOfProducts).toBe('2');
    await browser.findElement(By.id(`${product}_buttons_rem`)).click();
    numberOfProducts = await browser.findElement(By.id(`${product}_bucket`)).getText();
    expect(numberOfProducts).toBe('1');
}

async function TestCalculateBasket(product) {
    var numberOfProducts = await browser.findElement(By.id(`${product}_bucked`)).getText();
    var price = await browser.findElement(By.id(`${product}_price`)).getText();
    var sum_price = await browser.findElement(By.id(`${product}_sum_price`)).getText();
    expect(parseInt(sum_price)).toBe(parseInt(price) * parseInt(numberOfProducts));
}

async function TestPayment(product) {
    var numberOfProducts = await browser.findElement(By.id(`${product}_quantity`)).getText();
    expect(numberOfProducts).toBe('1');
}

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

var browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

describe('Products tests', () => {

    beforeAll(async () => {
        await browser.get('http://localhost:3000/products')
        console.log("Products tests:")
    })

    afterEach((done) =>
        setTimeout(done, 1000)
    )

    it('Test title', async () => {
        var title = await browser.getTitle();
        expect(title).toBe('React App');
    })

    it('Test add-remove banana', async () => {
        await TestAddRem("banana");
    })

    it('Test add-remove apple', async () => {
        await TestAddRem("apple");
    })

    it('Test add-remove cherry', async () => {
        await TestAddRem("cherry");
    })

    it('Test add-remove pineapple', async () => {
        await TestAddRem("pineapple");
    })

    it('Test add-remove strawberry', async () => {
        await TestAddRem("strawberry");
    })

    describe('Go to bucket tests', () => {

        it('Test go to bucket', async () => {
            await browser.findElement(By.id('link_to_basket')).click();
            var url = await browser.getCurrentUrl();
            expect(url).toBe("http://localhost:3000/basket");
        })

        describe('Bucket tests', () => {

            afterEach((done) =>
                setTimeout(done, 1000)
            )

            it('Test basket calculations', async () => {
                await TestCalculateBasket("banana")
            })

            it('Test basket calculations', async () => {
                await TestCalculateBasket("apple")
            })

            it('Test basket calculations', async () => {
                await TestCalculateBasket("cherry")
            })

            it('Test basket calculations', async () => {
                await TestCalculateBasket("pineapple")
            })

            it('Test basket calculations', async () => {
                await TestCalculateBasket("strawberry")
            })

            describe('Go to bucket tests', () => {

                afterAll(() => {
                    browser.quit();
                })

                it('Test go to payment', async () => {
                    await browser.findElement(By.id('link_to_payment')).click();
                    var url = await browser.getCurrentUrl();
                    expect(url).toBe("http://localhost:3000/pay");
                })
                describe('Payment tests', () => {

                    afterEach((done) =>
                        setTimeout(done, 1000)
                    )

                    it('Test basket calculations', async () => {
                        await TestPayment("banana")
                    })

                    it('Test basket calculations', async () => {
                        await TestPayment("apple")
                    })

                    it('Test basket calculations', async () => {
                        await TestPayment("cherry")
                    })

                    it('Test basket calculations', async () => {
                        await TestPayment("pineapple")
                    })

                    it('Test basket calculations', async () => {
                        await TestPayment("strawberry")
                    })
                })
            })
        })
    })
})
