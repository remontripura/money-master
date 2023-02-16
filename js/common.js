
function updateField (inputId){
    const Field = document.getElementById(inputId);
    const FieldElementString = Field.value;
    const FieldElement = parseFloat(FieldElementString);
    return FieldElement;
}
function updateValue (inputId){
    const valueTotal = document.getElementById(inputId);
    const TotalvalueString = valueTotal.innerText;
    const TotalValue = parseFloat(TotalvalueString);
}
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}