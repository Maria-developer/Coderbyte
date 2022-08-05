// Analogy for binary search: Searching for books in the library, starting in the middle instead of at A or Z

let nums = [2,7,8,9,10,13,17,19,21];

function binarySearch (array, target) { // Given an array of numbers (nums) and a target number
    let left = 0; // Let the left side of the array equal the start of the array
    let right = array.length - 1; // And let the right side of the array equal the end of the array

    while (left < right) { // As long as there are numbers in the array
        let mid = Math.floor((left + right)/2); // Find the midpoint of the array

        if (target === array[mid]) { // If the target number is equal to the number at the midpoint (mid index) of the array
            return mid; // Return the index of the mid
        } else if (target < array[mid]) { // If the target number is less than the number at the mid index, the target is on the left side of the array, so the mid and everything right of the mid can be excluded from the next search
            right = mid - 1; // So reassign the right/end of the array to be one spot to the left of the mid
        } else { // Otherwise, the target number is greater than the number at the mid and the target is on the right side of the array, so the mid and everything left of the mid can be excluded from the next search
            left = mid + 1; // So reassign the left/start of the array to be one index to the right of the mid
        }
    } // Re-enter the while loop, find the new mid, and compare the target to the new mid using the conditional statement again

    return false; // If the target number is not found in the array, return false
}

console.log(binarySearch(nums, 7)); // 1 (i.e. 7 is found at index 1)
console.log(binarySearch(nums, 15)); // false (i.e. 15 is not in the array)

// Time complexity: 0(log(n))

    // Because every time we loop, we divide the array in half
    // Divide and conquer approach

// Space complexity: 0(1)

    // Because regardless of how large the array is, we don't create more arrays
    // We simply update the left and right markers as we loop
    // So it has a constant space complexity