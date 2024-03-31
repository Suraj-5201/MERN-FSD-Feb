//Finding the Maximum - Develop a recursive function to find the maximum number in an array.

function findmax(arr,n){
    if(n===1){
        return arr[0];

    }
    let max=findmax(arr,n-1);

    if(arr[n-1]>max){
        return arr[n-1];
    }
    else{
        return max
    }
}

let arr1=[2,9,7,8];
let maxnum=findmax(arr1,arr1.length);
console.log(maxnum);