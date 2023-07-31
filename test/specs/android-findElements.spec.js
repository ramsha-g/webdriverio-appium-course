describe ('Android Elements Test', ()=>{
  it('Find element by accessibility id', async ()=> {
    
    // find element by accessbility id

    const appOption = await $('~App');

    // click on element
    await appOption.click();

    //assertion
    const actionBar = await $('~Action Bar');
    await expect(actionBar).tobeExisting;

  })

  it('Find element by classname', async ()=> {
    
    // find element by classname 

    const className = await $('android.widget.TextView');
    console.log(await className.getText());

    //Assertion
    await expect(className).toHaveText("API Demos");

  })

  it('Find element by Xpath', async ()=> {
    
    // find element by Xpath (//tagname[@attribute=value])

    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    
    // find by resourceId
    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

    // find by text
    await $('//android.widget.TextView[@text="Command two"]').click();

    // find by class
    const textAssertion = await $('//android.widget.TextView');
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");


  })

  it('Find element by UIAutomator', async ()=> {
    
    // find element by text contains

    await $('android=new UiSelector().textContains("Alert")').click();

  }) 

  it('Find element by elements', async ()=> {
    const expectedList = [
      'API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App', 
      'Content', 'Graphics', 'Media', 'NFC', 'OS', 'Preference',
      'Text', 'Views'
    ]
    const actualList = []

    // find multiple elements
    const textList = await $$('android.widget.TextView');

    // loop through elements
    for (const element of textList){
      actualList.push(await element.getText());
    }
    //assert
    await expect(actualList).toEqual(expectedList);
  }) 

  it.only('Working with text field', async ()=> {
    
    // Access the auto complete screen
    await $('~Views').click();
    await $('//*[@text="Auto Complete"]').click();
    await $('//*[@content-desc="1. Screen Top"]').click();

    // enter country name
    const countryName = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
    await countryName.addValue('Canada');

    //Assert country name
    await expect(countryName).toHaveText('Canada');

  }) 
})