/*
Upside down pyramid
*********
 *******
  *****
   ***
    *
*/

let rows =4

for(let i=rows;i>0;i--)
{
    let output=''
    for(let j=0;j<rows-i;j++)
    {
        output = output + ' '
    }
    for(let k=0;k<2*i-1;k++)
    {
        output = output + '*'
    }
    console.log(output)
}

/* output
*******
 *****
  ***
   *
*/