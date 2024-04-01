/*
Q4. Matrix Multiplication

Problem Description
You are given two integer matrices A(having M X N size) and B(having N X P). You have to multiply matrix A with B and return the resultant matrix. (i.e. return the matrix AB).



Problem Constraints
1 <= M, N, P <= 100

-100 <= A[i][j], B[i][j] <= 100



Input Format
The first argument given is the 2-D integer matrix A.
The second argument given is the 2-D integer matrix B.



Output Format
Return a 2D integer matrix denoting AB.



Example Input
Input 1:

A = [[1, 2],
     [3, 4]]
B = [[5, 6],
     [7, 8]]
Input 2:

A = [[1, 1]]
B = [[2],
     [3]]


Example Output
Output 1:

 [[19, 22],
  [43, 50]]
Output 2:

 [[5]]
*/


function matrixMultiply(A, B) {
    let rowsA = A.length
    let colsA = A[0].length
    let rowsB = B.length
    let colsB = B[0].length

    if (colsA !== rowsB) {
        return null
    }

    let C = []
    for (let i = 0; i < rowsA; i++) {
        C[i] = []
        for (let j = 0; j < colsB; j++) {
            C[i][j] = 0
            for (let k = 0; k < colsA; k++) {
                C[i][j] += A[i][k] * B[k][j]
            }
        }
    }

    return C
}

A = [[1, 2],
     [3, 4]]
B = [[5, 6],
     [7, 8]]

C = [[1, 1]]
D = [[2],[3]]

let result = matrixMultiply(A, B)
console.log(result)


/*
For A*B = [ [ 19, 22 ], [ 43, 50 ] ]

For C*D = [ [ 5 ] ]
*/