// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

function sumAll(arr) {
    let sortedArr = arr.sort((a,b)=>a-b);
    let sum = 0
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumAll([5, 10]));

//   https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays


  function diffArray(arr1, arr2) {
    const newArr1 = arr1.filter(x => !arr2.includes(x));
    const newArr2 = arr2.filter(x => !arr1.includes(x));
    return newArr1.concat(newArr2);  
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));