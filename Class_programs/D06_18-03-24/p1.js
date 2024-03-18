//Given an integer array print duplicate numbers

let arr = [2, 2, 2, 3, 1, 3, 4, 5, 6, 6];
let counts = {};

function count_repetation(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let flag = 0;

        for (let key in counts) {
            if (key == num) {
                counts[key]++;
                flag = 1;
                break;
            }
        }

        if (flag == 0) {
            counts[num] = 1;
        }
    }

    return counts;
}

count_repetation(arr);

for (let num in counts) {
    if (counts[num] > 1) {
        console.log(num);
    }
}

/* OUTPUT
2
3
6   */
