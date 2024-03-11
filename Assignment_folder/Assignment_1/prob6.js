//6. how iterate over an object data? explain with an example

let student = {
    Name: "Suraj",
    Age: 23,
    Gender: "Male"
}

for(let key in student)
{
    console.log(`${key}:${student[key]}`)
}

/* OUTPUT
Name:Suraj
Age:23
Gender:Male
*/
