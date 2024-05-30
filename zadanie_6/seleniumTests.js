driver = await new Builder().forBrowser(Browser.FIREFOX).build();
await driver.get('http://localhost:3000/products');
let title = await driver.getTitle();
await driver.manage().setTimeouts({implicit: 500});
let textBox = await driver.findElement(By.name('search_textarea'));
let submitButton = await driver.findElement(By.name('search_button'));

await textBox.sendKeys('banana');
await submitButton.click();

let value = await message.getText();

await driver.quit();