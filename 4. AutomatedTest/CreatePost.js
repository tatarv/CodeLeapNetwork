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

    // Open second page
    await driver.get('https://code-leap-network.vercel.app/feed');

    // Find the field Title and input information for the titlle "Hello World"
    const titleField = await driver.findElement(By.name('title'));
    await titleField.sendKeys('Hello World');

    // Find the field Content and input information for the content "Test content"
    const contentField = await driver.findElement(By.name('content'));
    await contentField.sendKeys('Test content');

    const createButton = await driver.findElement(By.className('sc-bczRLJ reBrp'));
    await createButton.click();

    // Check if fields are cleared to determine if tests passed
    const titlePlaceHolder = await titleField.getAttribute('placeholder')
    const contentPlaceHolder = await contentField.getAttribute('placeholder')

    if(titlePlaceHolder == 'Hello World' && contentPlaceHolder == 'Content here' ){
        console.log('Tests Passed: the post was created successfully');
    }else{
        console.log('Test failed: check errors');
    }

  }
  
  finally {
        // Quit the browser
        await new Promise(resolve => setTimeout(resolve, 5000));
         driver.quit();
      }
    }
    
    executeTest();