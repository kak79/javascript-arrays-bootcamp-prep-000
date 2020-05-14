var chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];



function addElementToBeginningOfArray(Array,element){
  return [element, ...Array]
}

function destructivelyAddElementToBeginningOfArray(newArray,element){
  newArray.unshift(element);
  return newArray
}

function addElementToEndOfArray(newArray1,element){
  return [ ...newArray1, element]
}

function destructivelyAddElementToEndOfArray(newArray2,element){
  newArray2.push(element);
  return newArray2
}

function accessElementInArray(,index){
  console.log(newArray2[index])
}


function destructivelyRemoveElementFromBeginningOfArray(newArray3){
  newArray3.shift()
}






