describe ('Android Native Features Tests', ()=>{
  it('Access an activity directly', async ()=> {
  
  // access activity
  await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
 
   //pause
  await driver.pause(3000);
 
  //assertion
  await expect ($('//*[@text="App/Alert Dialogs"]')).toExist();  
    
  })

  it('Working with dialog boxes', async ()=> {
  
    // access activity
    await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
  
   // click on first dialog box
    await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

    //accept alert
    await driver.acceptAlert();

    // assertion - alert box is no longer visible
    await expect ($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  
    })

it('Vertical scrolling', async ()=> {

    await $('~App').click();
    await $('~Activity').click();

    // scroll to end (not stable if element gets moved)
    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
  //  await $('~Secure Surfaces').click();

    // scroll until text found 
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();


    //assertion
    await expect ($('~Secure Dialog')).toExist();
    })  

  it('Horizontal scrolling', async ()=> {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    )
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

    await driver.pause(3000);
  })  


  it.only('Working with date picker', async ()=> {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    )
    //get current date
    const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
    const currentDate = await date.getText();

    // click on change date
    await  $('~change the date').click();

    // scroll right to next month
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

    // select 10th date
    await $('//*[@text="10"]').click();

    // click ok
    await $('//*[@resource-id="android:id/button1"]').click();

    // verify updated date (not equal to initial date)
    await expect(await date.getText()).not.toEqual(currentDate);
  })  

  })