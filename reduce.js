/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
  return arr.reduce(function (accumulator, nextObj) {
    accumulator.push(nextObj[key]);
    return accumulator;
  }, []);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
  return Array.from(str.toLowerCase()).reduce(function (accum, nextVal) {
    let vowels = "aeiou";
    //❓for mariam, why must it be vowels.includes INSTEAD of nextVal.includes👇🏾👇🏾👇🏾
    if (vowels.includes(nextVal)) {
      if (accum[nextVal] === undefined) {
        accum[nextVal] = 1;
      } else {
        accum[nextVal]++;
      }
    }
    return accum;
  }, {});
}
/*

//extra practice for myself: Write a JavaScript function called calculateLetterFrequency that accepts a string as input and returns an object representing the frequency of each letter in the string. The keys of the object should be the letters, and the values should be the counts of each letter.
//calculateLetterFrequency('hello'); 
// Output: { h: 1, e: 1, l: 2, o: 1 }

calculateLetterFrequency('programming'); 
// Output: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }
*/
function calculateLetterFrequency(str) {
  return Array.from(str).reduce(function (accum, nextChar) {
    if (accum[nextChar] === undefined) {
      accum[nextChar] = 1;
    } else {
      accum[nextChar]++;
    }
    return accum;
  }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (accum, nextObj) {
    nextObj[key] = value;
    accum.push(nextObj);
    return accum;
  }, []);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
  return arr.reduce(
    function (accum, nextVal) {
      if (callback(nextVal)) {
        accum[0].push(nextVal);
      } else {
        accum[1].push(nextVal);
      }
      return accum;
    },
    [[], []]
  );
}
