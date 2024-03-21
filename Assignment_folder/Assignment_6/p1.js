let str = "ABEC"
let str2=''
let count=0


for(let i=0;i<str.length;i++)
{
    if(str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U')
    {
        for(let j=i;j<str.length;j++)
        {
            for(let k=i;k<=j;k++)
            {
                str2 = str2 + str[k]
            }
            //console.log(str2)
            count++
            str2=''
        }
    }
}
let result = (count%10003)
console.log(result)


//OUTPUT : 6