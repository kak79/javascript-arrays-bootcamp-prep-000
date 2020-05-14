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

function destructivelyAddElementToEndOfArray(Array,element){
  newArray2.unshift(element);
  return Array
}

function accessElementInArray(newArray3,index){
  newArray3[index] = newArray3[element]
  return element
}






