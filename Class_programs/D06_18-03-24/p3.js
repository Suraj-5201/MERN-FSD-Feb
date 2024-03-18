let arr = [4,-3,-1,8]
let cum_arr = []
cum_arr[0]=arr[0]

function cummulative_array(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        cum_arr.push(cum_arr[i-1]+arr[i])
    }
}
cummulative_array(arr)
//console.log(cum_arr)

let counts ={}
function count_repetation(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = cum_arr[i];
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

let flag=0
for(let num in counts)
{
    if(counts[num]>1 || num==0)
    {
        console.log(true)
        flag=1
        break
    }
}
if(flag==0)
    {
        console.log(false)
    }
