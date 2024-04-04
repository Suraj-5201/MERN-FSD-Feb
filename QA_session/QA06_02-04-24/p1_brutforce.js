let arr = [2,2,1,1,1,2,2];
let n = arr.length / 2;
let arr2 = [];
let i = arr.length - 1; // Start from the last index

while (i >= 0) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            arr2.push(arr[j]);
        }
    }
    if (arr2.length == n) {
        console.log(arr2);
    }
    arr2 = [];
    i++; // Increment i to avoid an infinite loop
}


