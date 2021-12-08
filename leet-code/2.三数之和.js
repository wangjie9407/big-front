// 需求: 求一个数组中，任意三个不重复元素和为0的所有子数组
function threeSum(nums) {
    // 排序
    if (!nums || nums.length < 3) return []
    let arr = nums.sort((a, b) => a - b)
    for(let i=0, len = nums.length; )
}

threeSum([1, 3, 5, 6, 3, 4, 5, 1])