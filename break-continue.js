const nums = [1,-2,3,4,5,-6,7,-8,9];
for(let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    if(nums[i]>6) {
        break;//instant stops iterations
    }
    // console.log(nums[i]);
}

for (let i = 0; i < nums.length; i++){
    if(nums[i] < 0){
        continue;
    }
    console.log(nums[i]);//continues other iteration in the same loop
}