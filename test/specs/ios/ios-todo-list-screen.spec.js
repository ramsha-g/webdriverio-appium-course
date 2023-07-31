import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';


describe ('TODO list', ()=>{
  before (async() => {
    //CREATE todo list
      await ListScreen.createListBtn.click();
      await ListScreen.listNameInput.addValue("TODO List");
      await ListScreen.createBtn.click();
    
      await expect(await ListScreen.listNameField("TODO List")).toBeExisting();
      await ListScreen.listNameField("TODO List").click();

})

 
  it('Create a TODO lis item', async () => {
    //await $('~Add').click();
    await ItemScreen.createItemBtn.click();
    await ItemScreen.itemNameInput.addValue("Things to do today");
    await ItemScreen.dueBtn.click();
    await ItemScreen.datePickerBtn.click();
    await ItemScreen.getByAccessibility("24").click();
    await ItemScreen.windowClick.click();
    await ItemScreen.createBtn.click();


    // await ItemScreen.getByAccessibility("Things to do today").click();
    // await ItemScreen.getByAccessibility("Monday, July 24").click();

  })


});