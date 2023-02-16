
document.getElementById('btn-calculate').addEventListener('click', function(){
    const foodFiled = updateField('food-field');
    const rentFiled = updateField('rent-field');
    const clothFiled = updateField('cloth-field');
    const total = foodFiled + rentFiled + clothFiled;
    setTextElementValueById('total-expenses', total);
    const incomeField = updateField('income-field');
    const currentBalance = incomeField - total;
    const balanceTotal = updateValue('balance-total');
    setTextElementValueById('balance-total', currentBalance);

});