//3. How to find out if the given two strings are anagrams or not?


function anagram(str1,str2)
{
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    
    if (str1.length === str2.length) {
        let count = 0
        for (let i = 0; i < arr1.length; i++) {
            let found = false
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] == arr2[j]) {
                    found = true
                    arr2.splice(j, 1)
                    break
                }
            }
            if (found) {
                count++
            }
        }
        if (arr1.length == count) {
            console.log("It is an anagram\n")
        } else {
            console.log("It is not an anagram")
        }
    } else {
        console.log("It is not an anagram")
    }
}


let str1 ="care"
let str2 ="race"
let str3 ="cell"
let str4 ="laptop"

anagram(str1,str2) // output :It is an anagram
anagram(str1,str3) // output :It is not an anagram
anagram(str1,str4) // output :It is not an anagram

