const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe ('Add Notes', ()=>{
  it('Skip tutorial', async () => {

    //tap on skip
    await AddNoteScreen.skipBtn.click();
    
    // assert add note screen
    await expect (AddNoteScreen.addNoteTxt).toBeDisplayed();
  })

  it('Add, save, verify note', async () => { 
    // click on add note
    await AddNoteScreen.addNoteTxt.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    //add note Title
    await AddNoteScreen.noteHeading.addValue("Fave anime list");

    //add note body
    await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

    // tap system back
   await AddNoteScreen.saveNote();

    // assert edit icon
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");

  })
  })