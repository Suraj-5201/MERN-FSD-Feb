/*
diamond shape

    *
   *** 
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

let rows = 4;

function topPy(rows) {
    for (let i = 0; i < rows; i++) {
        let output = '';
        for (let j = 0; j < rows - i - 1; j++) {
            output = output + ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            output = output + '*';
        }
        console.log(output);
    }
}

function bottomPy(rows) {
    for (let i = rows-2; i >= 0; i--) {
        let output = '';
        for (let j = 0; j < rows - i-1; j++) {
            output += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            output += '*';
        }
        console.log(output);
    }
}

topPy(rows);
bottomPy(rows);

/* output
   *
  ***
 *****
*******
 *****
  ***
   *      */