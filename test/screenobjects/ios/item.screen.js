class ItemScreen {

  get createItemBtn(){
    return $('//*[@name="Create item"]');
  }

  get itemNameInput(){
    return $('//*[@value="Title"]');
  }

  get dueBtn(){
    return $('//*[@value="Due"]');
  }

  get datePickerBtn(){
    return $('~Date Picker');
  }


  get windowClick(){
    return $('//XCUIElementTypeWindow[@index=2]');
  }

  get createBtn(){
    return $('~Create');
  }

  getByAccessibility(name){
    return $(`~${name}`);
  }
}
export default new ItemScreen();

