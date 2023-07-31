describe ('iOS Native Features', ()=>{
  it('working with alert box', async () => {
    await $('~Alert Views').click();
    await $('~Okay / Cancel').click();

   // await $('~OK').click();

     await driver.dismissAlert();
    await expect($('~OK')).not.toExist();
  })

it('working with scrollable element', async () => {
  // simple
    await driver.execute('mobile: scroll', { direction: "down"});
    await driver.execute('mobile: scroll', { direction: "up"});
  //complex

  await $('~Picker View').click();
  const redPicker = await $('~Red color component value');
  await driver.execute('mobile: scroll', { element: redPicker.elementID, direction: "down"});
  await driver.pause(2000);
})

it.only('working with picker view', async () => {
  await $('~Picker View').click();
  const redPicker = await $('~Red color component value');
  const greenPicker = await $('~Green color component value');
  const bluePicker = await $('~Blue color component value');

// set purple color (125, 0, 125)
await redPicker.addValue('125');
await greenPicker.addValue('0');
await bluePicker.addValue('125');

await driver.pause(2000);

})
})