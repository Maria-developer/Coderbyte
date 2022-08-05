let nums = [2,7,8,9,10,13,17,19,21];

function binarySearch (array, target) { // Given an array of numbers (nums) and a target number
    return binarySearchHelper (array, target, 0, array.length - 1); // Run the binarySearchHelper function with these parameters: an array of numbers, a target number, the first index as the left marker, the last index as the right marker
}

function binarySearchHelper (array, target, left, right) { // Given the array of numbers (nums), a target number, a left marker, and a right marker
    if (left > right) { // If there are no numbers left in the array (i.e. the target is not found)
        return false; // Return false
    }

    let mid = Math.floor((left + right)/2); // Find the mid index of the array
    
    if (target === array[mid]) { // If the target number is equal to the number at the mid index
        return mid; // Return the mid index
    } else if (target < array[mid]) { // If the target number is less than the number at the mid index
        return binarySearchHelper (array, target, left, mid - 1); // Run the binarySearchHelper function again with the right marker reassigned one spot to the left of the mid
    } else { // Otherwise, the target number is greater than the number at the mid index
        return binarySearchHelper (array, target, mid + 1, right); // Run the binarySearchHelper function again with the left marker reassigned one spot to the right of the mid
    }
}

console.log(binarySearch(nums, 7)); // 1 (i.e. 7 is found at index 1)
console.log(binarySearch(nums, 15)); // false (i.e. 15 is not in the array)

// Time complexity: O(log(n))

// Space complexity: O(log(n))

    // Need to count the call stacks
    // Every time we have a recursive call, it's going to take up space