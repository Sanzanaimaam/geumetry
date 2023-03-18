document.getElementById('btn-triangle').addEventListener('click',function(){

    const triangleInputs = setInputAndElement('triangle-base', 'triangle-height', 'triangle-value');
    const triangleArea = Number(0.5 * triangleInputs.baseInput * triangleInputs.baseHeight).toFixed(2).toString();
    setTextElementValueById('triangle-value', triangleArea)
    checkInput(triangleInputs);
  
  })
  document.getElementById('btn-rectangle').addEventListener('click', function() {
    const rectangleInputs= setInputAndElement('rectangle-width', 'rectangle-length', 'rectangle-value');
    const rectangleArea=Number(rectangleInputs.baseInput*rectangleInputs.baseHeight).toFixed(2).toString();
    setTextElementValueById('rectangle-value', rectangleArea)
    checkInput(rectangleInputs);
  });
  
  document.getElementById('btn-parallelogram').addEventListener('click', function() {
    const parallelogramInputs= setInputAndElement('parallelogram-base', 'parallelogram-height', 'parallelogram-value');
    const parallelogramArea=Number(parallelogramInputs.baseInput*parallelogramInputs.baseHeight).toFixed(2).toString();
    setTextElementValueById('parallelogram-value', parallelogramArea)
    checkInput(parallelogramInputs);
  });
  
  document.getElementById('btn-rhombus').addEventListener('click',function(){
    const rhombusBaseInput=getTextElementById('rhombus-base')
    const rhombusBaseHeight=getTextElementById('rhombus-height')
    const rhombusValue=getTextElementById('rhombus-value')
    const rhombusArea=Number(rhombusValue+(0.5*rhombusBaseInput*rhombusBaseHeight)).toFixed(2).toString();
    setTextElementValueById('rhombus-value', rhombusArea)
  })
  document.getElementById('btn-pentagon').addEventListener('click',function(){
    const pentagonBaseInput=getTextElementById('pentagon-base')
    const pentagonBaseHeight=getTextElementById('pentagon-height')
    const pentagonValue=getTextElementById('pentagon-value')
    const pentagonArea=(Number(pentagonValue) + 0.5 * pentagonBaseInput * pentagonBaseHeight).toFixed(2).toString();
    setTextElementValueById('pentagon-value', pentagonArea)
  })
  document.getElementById('btn-ellipse').addEventListener('click',function(){
    const ellipseBaseInput=getTextElementById('ellipse-base')
    const ellipseBaseHeight=getTextElementById('ellipse-height')
    const ellipseValue=getTextElementById('ellipse-value')
    const ellipseArea=(Number(ellipseValue)+(3.14*ellipseBaseInput*ellipseBaseHeight)).toFixed(2).toString();
    setTextElementValueById('ellipse-value', ellipseArea)
  })