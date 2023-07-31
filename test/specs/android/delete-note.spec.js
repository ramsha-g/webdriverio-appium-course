describe ('Delete Notes', ()=>{
  it('Skip tutorial', async () => {

    //tap on skip
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
    
    // assert add note screen
    await expect ($('//*[@text="Add note"]')).toBeDisplayed();
  })

  it('Add, save, verify note', async () => { 
    // click on add note
    await $('//*[@text="Add note"]').click();
    await $('//*[@text="Text"]').click();
    await expect ($('//*[@text="Editing"]')).toBeDisplayed();

    //add note Title
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fave cartoon list");

    //add note body
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOnePiece\nAOT");

    // tap system back
    await driver.back();
    await driver.back();

    // assert edit icon
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAOT");
    await driver.back();

  })

  it('Delete note, verify deletion', async () => {

    // get note text
    const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

    // click on .. note
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();

    // click on more
   await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]').click();
   // click on delete
   await $('//*[@text="Delete"]').click();
   // click on okay
   // await $('//*[@resource-id="android:id/button1"]').click();

   //click on okay(another way)
   await driver.acceptAlert();

   // click on nav bar
   await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
    // click on trash can
     await $('//*[@text="Trash Can"]').click();
  // assert deleted note
  const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');

  await expect(trashCanItem).toHaveText(note);
   
   



  })

  })