const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Dipzol'},
]

/* const output = [];
for (let i = 0; i<students.length; i++){
    elements = students[i];
    const result = elements.name;
    output.push(result);
    // console.log(output);

} */

const names = students.map( s => s.name);
const ids = students.map(s => s.id>40);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find ( s => s.id>40);
console.log(biggerOne);

