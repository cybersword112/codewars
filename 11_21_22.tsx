function maxArea(height: number[]): number {
    // declare a max var
    // do a nested for loop
    // find the biigeset val and return
let ans = 0
let i = 0
let j = height.length-1

while (i < j) {
    // ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i))
    // height[i] <= height[j] ? i++ : j--
    let currVol = Math.min(height[i],height[j]) * (j-i)
    if(currVol > ans){
        ans = currVol
    }
    if(height[i]<=height[j]){
        i++
    }else{
        j--
    }
}
    
return ans
};

// input will be an list of nums whose index indicates their position on the x and their value indicates their y height
// output should be the largest value possible obtained from
// far index - close index  times the lowest value of the pair

// this solution uses a two pointer sliding window approach, comparing a window and then moving the smaller side inward each time

console.log(maxArea([1,5,3,5,1]),25)