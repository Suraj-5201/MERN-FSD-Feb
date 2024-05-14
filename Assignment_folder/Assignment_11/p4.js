/*
Q4. Print reverse string

Problem Description
Write a recursive function that takes a string, S, as input and prints the characters of S in reverse order.



Problem Constraints
1 <= |s| <= 1000



Input Format
First line of input contains a string S.



Output Format
Print the character of the string S in reverse order.



Example Input
Input 1:

 scaleracademy
Input 2:

 cool


Example Output
Output 1:

 ymedacarelacs
Output 2:

 looc
*/

function printReverseString(S, index) {
    if (index < 0) {
        return
    }

    process.stdout.write(S.charAt(index))

    printReverseString(S, index - 1)
}

let S = "scaleracademy";
printReverseString(S, S.length - 1); // Output: ymedacarelacs

let A = "cool";
printReverseString(A, A.length - 1); // Output: looc
