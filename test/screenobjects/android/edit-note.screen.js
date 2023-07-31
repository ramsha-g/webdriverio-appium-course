const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

class EditNoteScreen {
get firstNote () {
  return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
}

get moreBtn () {
  return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]')
}

get deleteBtn () {
  return $('//*[@text="Delete"]')
}

get navBar () {
  return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
}

get trashCanBtn () {
  return $('//*[@text="Trash Can"]')
}




  async skipTutorial () {
    await AddNoteScreen.skipBtn.click();
    await expect (AddNoteScreen.addNoteTxt).toBeDisplayed();
  }

  async addAndSaveNote (noteHeading, noteBody) {
    await AddNoteScreen.addNoteTxt.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();
    await AddNoteScreen.noteHeading.addValue(noteHeading);
    await AddNoteScreen.noteBody.addValue(noteBody);
    await AddNoteScreen.saveNote();
  }

}
module.exports = new EditNoteScreen