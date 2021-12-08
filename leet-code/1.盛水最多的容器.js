// 数组以值为y，以下标为x，求该数组中任意两元素坐标乘积能得出的最大值
function maxArea (height){
    let max = 0
    // 解题思路：首尾一起遍历，高取最小值，宽为下标之差 + 1， 下一次计算面积时高取最小值的下一个(前一个元素)，然后再次判断两者大小取最小值，开始计算
    for(let i=0, j= height.length -1; i<j;){
        const h = height[i] < height[j] ? height[i] : height[j]
        height[i] < height[j] ? i+=1 : j-=1
        const w = j - i + 1
        max = max > h * w ? max : h * w
    }
    return max
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
