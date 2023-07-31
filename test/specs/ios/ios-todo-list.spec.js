describe ('TODO list', ()=>{

  it('Create a TODO list', async () => {
  await $('//*[@name="Create list"]').click();
  await $('//*[@value="List Name"]').addValue("TODO List");
  await $('~Create').click();

  await expect(await $("~TODO List")).toBeExisting();
  })


  it('Create a TODO list', async () => {
    await $('~TODO List').click();
    //await $('~Add').click();
    await $('//*[@name="Create item"]').click();
    await $('//*[@value="Title"]').addValue("Things to do today");
    await $('//*[@value="Due"]').click();
    await $('~Date Picker').click();
    await $('~31').click();
    await $("//XCUIElementTypeWindow[@index=2]").click();
    await $('~Create').click();

    //assertion
    await expect (await $("~Things to do today")).toBeExisting();
    await expect (await $("~Due July 31, 2023")).toBeExisting();

    })
  
  
});