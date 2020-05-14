var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];



function addElementToBeginningOfArray(newArray,element){
  return [element, ...newArray]
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray(newArray1,element){
  return [ ...newArray1, element]
}

function destructivelyAddElementToEndOfArray(element){
  Array1.unshift(element);
  return Array1
}

function accessElementInArray(newArray3,index){
  newArray3[index] = newArray3[element]
  return element
}






