//2. Find the number of occurrences of a character in a String?

let str1 = "assignment"
let arr = str1.split('')
let count = {}

for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    let flag = 0
    for (let key in count) {
        if (key == num) {
            count[key]++
            flag = 1
        }
    }
    if (flag == 0) {
        count[num] = 1
    }
}

for (let num in count) {
    console.log(`${num}:${count[num]}`)
}

/* OUTPUT

a:1
s:2
i:1
g:1
n:2
m:1
e:1
t:1

*/


