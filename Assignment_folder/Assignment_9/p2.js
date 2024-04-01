function anti_diagonals(A) {
    let n = A.length;
    let N = 2 * n - 1;

    let result = [];
    for (let i = 0; i < N; i++) {
        result.push([]);
    }

    // Push each element in the result vector
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            result[i + j].push(A[i][j]);

    return result;
}

let A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let output = anti_diagonals(A);
for (let row of output) {
    console.log(row.join(' '));
}
