
const { Builder, By, Key, until } = require('selenium-webdriver');

async function executeTest() {
  // Initialize the driver
  const driver = new Builder().forBrowser('chrome').build();

  try {
    // Open the page
    await driver.get('https://code-leap-network.vercel.app/');

    // Find the field Username and input information for the user "tnrv_"
    const usernameField = await driver.findElement(By.name('username'));
    await usernameField.sendKeys('tnrv_');

    // Find the button ENTER and click on it
    const enterButton = await driver.findElement(By.className('sc-bczRLJ reBrp'));
    await enterButton.click();

    // Check if the user was created by accessing the homepage
    // Find the button to create the post
    const createButton = await driver.findElement(By.className('sc-bczRLJ reBrp'));
    const isVisible = await createButton.isDisplayed();

    // check if the button is visible
    if (isVisible) {
        // if visible the user passed the first page and was created successfully
        console.log('Tests Passed: the user was created successfully');
      } else {
        // if not, show the error
        console.log('Test failed: check errors');
      }
  } finally {
    // Quit the browser
      await new Promise(resolve => setTimeout(resolve, 5000));
       driver.quit();
  }
}

executeTest();
