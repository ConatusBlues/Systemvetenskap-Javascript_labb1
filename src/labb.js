
// modifiera sum() tills testet blir godkänt!
function sum(x, y) {

    return x + y

}

function multiply(x, y) {

    return x * y
}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero(x) {
    if (x < 0) {
        return true
    }
    else {
        return false
    }
}


// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!

function round(x) {

        return Math.round(x);
}
//etc...

function addingUp(x) {

    let sum = 0;
    for (let i = 1; i <= x; i++) {
        sum += i;
    }
    return sum;
    
}

function findMinMax(array) {

    let min = Math.min.apply(null, array),
    max = Math.max.apply(null, array);

    return {min: min, max: max}
}

function afterXmasEve2020(datum){

    let christmasEveDate = new Date('2020-12-24')
    let inputDatum = new Date(datum)
    if(inputDatum < christmasEveDate){

        return false
    }
    else {
        return true
    }
}

function sortByStringLength(words)
{
    var array = words;

    array.sort(function(a, b){return a.length - b.length});

    return array;
}

function charCounter(letterToCount, sentence)
{
    let letter_Count = 0;
    let sentenceToCount= sentence.toLowerCase();
    for (let position = 0; position < sentenceToCount.length; position++) 
    {
       if (sentenceToCount.charAt(position) == letterToCount) 
         {
         letter_Count += 1;
         }
     }
     return letter_Count;
}

function numbersOnly(array){

    var arr = array.filter(function(n){
        if(Number.isNaN(n)){
           return n === null;
        }
        else {
            
            return typeof n === 'number';
        }
    });
    return arr;
}

function sortNumbers(array, ifAscOrDesc){

    if (ifAscOrDesc === -1){
    array.sort(function(a, b){return b-a});
    }
    else {
        array.sort(function(a, b){return a-b});
    }

return array;
}

function personFactory(firstname, lastname){
    
    class Person{
        firstname;
        lastname;
        fullname;
        initials;
    }    
    let person = new Person();
    person.firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
    person.lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
    person.fullname = firstname +' '+ lastname;
    person.initials = firstname.charAt(0).toUpperCase() + '.' + lastname.charAt(0).toUpperCase();

    return person;
}

function doublePrice(products){
 

    for(let i = 0; i < products.length; i++){
  
      products[i].price *= 2;
  
  }
  return products; 
  
  }

function and(statement1, statement2){

    if(statement1 & statement2 == true){
        return true;
    }
    else{
        return false;
    }
}

function removeLeadingTrailing(number)
{
    let returnNumber = Number(number); 
    return returnNumber;
}

function getKeysAndValues(obj)
{

    result = {keys: Object.getOwnPropertyNames(obj), values: Object.values(obj)}

    return result;
    

}

// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum
module.exports.multiply = multiply
module.exports.isBelowZero = isBelowZero
module.exports.round = round
module.exports.addingUp = addingUp
module.exports.findMinMax = findMinMax
module.exports.afterXmasEve2020 = afterXmasEve2020
module.exports.sortByStringLength = sortByStringLength
module.exports.charCounter = charCounter
module.exports.numbersOnly = numbersOnly
module.exports.sortNumbers = sortNumbers
module.exports.personFactory = personFactory
module.exports.doublePrice = doublePrice
module.exports.and = and
module.exports.removeLeadingTrailing = removeLeadingTrailing
module.exports.getKeysAndValues = getKeysAndValues

