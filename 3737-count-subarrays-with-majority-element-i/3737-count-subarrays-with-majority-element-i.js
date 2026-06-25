/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = i; j < n; j++) {
            sum += (nums[j] === target ? 1 : -1);

            if (sum > 0) {
                count++;
            }
        }
    }

    return count;
};