function hasTargetSum(array, target) {
  // Write your algorithm here
  const trackedNum = new Set();

  for(let yangNumber of array) {
    const yingNumber = target - yangNumber;
    if (trackedNum.has(yingNumber)){
      return true;
    }
    trackedNum.add(yangNumber);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
//Time Complexity  O(n)
//Space Complexity O(n)

/* 
  Add your pseudocode here
*/
//1. We will need to keep track of the numbers we have seen
//2. Iterate through each number in the array
//3. Calculate if the sum of anny numbers in the array add up to the target number
//  *if yes, then return true(sum of two numbers found)
//. * if not, return false

/*
  Add written explanation of your solution here
*/ 
//By initializing an empty set we are able to keep track of the numbers we 
//have encountered during the iteration

//We then go through each element(trackedNum) in the input array

//For each element we calculate its complient number, which is the difference 
//between the target number and the yangNumber

//We check to see if the complementary numbers are already in the trackedNumbers set

//if the number is in the set, we return true and add it if it wasnt in the set before

//if the loop continues without finding a sum pair that is equal to the target, we return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}
module.exports = hasTargetSum;



console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));//true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));//true
console.log(hasTargetSum([1, 2, 5],10)); //false
console.log(hasTargetSum([-7, 10, 4, 8],3)); //true
console.log(hasTargetSum([1, 2, 3, 4], 5)); //true
console.log(hasTargetSum([2, 2, 3, 3],4)); //true


