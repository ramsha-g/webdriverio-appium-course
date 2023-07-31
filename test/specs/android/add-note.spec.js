describe ('Add Notes', ()=>{
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
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fave anime list");

    //add note body
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOnePiece\nAOT");

    // tap system back
    await driver.back();
    await driver.back();

    // assert edit icon
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAOT");

  })
  })