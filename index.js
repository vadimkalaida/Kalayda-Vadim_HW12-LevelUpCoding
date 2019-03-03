var hills = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6];

function findWater(hills) {
		
    var leftMax = 0,
    rightMax = 0,
    left = 0,
    right = hills.length - 1,
    volume = 0;

    while(left < right) {
        if(hills[left] > leftMax) {
            leftMax = hills[left];
        }
        if(hills[right] > rightMax) {
            rightMax = hills[right];
        }
        if(leftMax >= rightMax) {
            volume += rightMax - hills[right];
            right--;
        } else {
            volume += leftMax - hills[left];
            left++;
        }
    }
    return volume;
    
}
console.log(findWater(hills));