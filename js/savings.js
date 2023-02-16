document.getElementById('btn-percent').addEventListener('click', function(){
    const percentField = updateField('percent-field');
    const balanceTotal = updateField('income-field')
    let savings = balanceTotal  * percentField / 100;
    const savingTotal = updateValue('saving-total');
    setTextElementValueById('saving-total', savings);


    const foodFiled = updateField('food-field');
    const rentFiled = updateField('rent-field');
    const clothFiled = updateField('cloth-field');
    const subTotal = foodFiled + rentFiled + clothFiled + savings;
    const total = balanceTotal - subTotal;
    setTextElementValueById('main-total', total);
})