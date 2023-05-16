// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CreatePost', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CreatePost', async function() {
    await driver.get("https://code-leap-network.vercel.app/")
    await driver.manage().window().setRect({ width: 2576, height: 1096 })
    await driver.findElement(By.name("username")).click()
    await driver.findElement(By.name("username")).click()
    {
      const element = await driver.findElement(By.name("username"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.name("username")).sendKeys("tnrv_")
    await driver.findElement(By.css(".sc-bczRLJ")).click()
    await driver.findElement(By.name("title")).click()
    await driver.findElement(By.name("title")).sendKeys("Hello World")
    await driver.findElement(By.name("content")).sendKeys("Content here for tests")
    await driver.findElement(By.css(".sc-bczRLJ")).click()
  })
})