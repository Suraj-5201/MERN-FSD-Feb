let s1 = 'I am suraj and i am from shimoga'
let arr = s1.toLowerCase().split(' ')
let counts = {}
let s2 = []
//console.log(arr1)

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
//console.log(counts)

for(let num in counts)
{
    if(counts[num]=1)
    {
        s2.push(num)
    }
}

let Result = s2.join(' ')
console.log(Result)

/* OUTPUT
i am suraj and from shimoga 
*/