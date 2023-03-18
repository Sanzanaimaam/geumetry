function getInputElementById(inputId){
    const allBaseInput=document.getElementById(inputId);
    const allBaseInputString=allBaseInput.value;
    const allBaseInputInt=parseFloat(allBaseInputString);
    allBaseInput.value=''
    return allBaseInputInt;

}
function setInputAndElement(shapeBase, shapeHeight, shapeValue){
    const baseInput=getInputElementById(shapeBase)
    const baseHeight=getInputElementById(shapeHeight)
    const value=getTextElementById(shapeValue)
    // return triangleBaseInput,triangleBaseHeight,triangleValue
    return {baseInput, baseHeight,value };
}

function getTextElementById(textId){
    const textBaseInput=document.getElementById(textId);
    const textBaseInputString=textBaseInput.innerText;
    const textBaseInputInt=parseFloat(textBaseInputString);
    return textBaseInputInt;
}

function setTextElementValueById(textId,newValue){
    const textElement=document.getElementById(textId);
    textElement.innerText=newValue;
}

// function setRandomColor(randomId){
//     const gridItem = document.getElementById(randomId);
//     gridItem.addEventListener("mouseover", function() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     gridItem.style.backgroundColor = "#" + randomColor;
//   });
// }

function checkInput(inputId){
    if (isNaN(inputId.baseInput) || inputId.baseInput === '' || isNaN(inputId.baseHeight) || 
    inputId.baseHeight === '' || inputId.baseInput<0 || inputId.baseHeight<0 ) {
        alert('Please enter valid numbers');
        return;
    }
}

function changeColor(element) {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = randomColor;
  }
