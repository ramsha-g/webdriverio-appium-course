const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe ('Delete Notes', ()=>{

  before(async() => {
  await EditNoteScreen.skipTutorial();
  await EditNoteScreen.addAndSaveNote("Fave cartoon list","Naruto\nOnePiece\nAOT");
  await driver.back();

  })

  it('Delete note, verify deletion', async () => {
    // get note text
    const note = await EditNoteScreen.firstNote.getText();

    // click on .. note
    await EditNoteScreen.firstNote.click();

    // click on more
   await EditNoteScreen.moreBtn.click();

   // click on delete
   await EditNoteScreen.deleteBtn.click();
   // click on okay
   // await $('//*[@resource-id="android:id/button1"]').click();

   //click on okay(another way)
   await driver.acceptAlert();

   // click on nav bar
   await EditNoteScreen.navBar.click();
   
   // click on trash can
     await EditNoteScreen.trashCanBtn.click();

  // assert deleted note
  const trashCanItem = await EditNoteScreen.firstNote

  await expect(trashCanItem).toHaveText(note);
   
   



  })

  })