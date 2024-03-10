/*Generate * pattern to construct a pyramid
    *
   *** 
  *****
 *******
*********
*/

let row =4

for(let i=0;i<=row;i++)
{
    let output=''
    for(let j=0;j<=row-i-1;j++)
    {
        output = output + ' '
    }
    for(let k=0;k<2*i-1;k++)
    {
        output = output + '*'
    }
    console.log(output)
}

/* Output
   *
  ***
 *****
*******
*/