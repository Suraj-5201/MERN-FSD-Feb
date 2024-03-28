let M1 = [[1,2,3],[4,5,6],[7,8,9]]
let M2 = [[9,8,7],[6,5,4],[3,2,1]]


function addMat(Matrix1,Matrix2)
{
    let result = []
    for(let i=0;i<Matrix1.length;i++)
    {
        let row = []
        for(let j=0;j<Matrix1[i].length;j++)
        {
            row.push(Matrix1[i][j] + Matrix2[i][j])
        }
        result.push(row)
    }
    return result
}

console.log(addMat(M1,M2))