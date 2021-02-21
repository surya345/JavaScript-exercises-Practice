// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruitArray=[
    {name:'mango',color:'yellow',pricePerKg:60},
    {name:'apple',color:'red',pricePerKg:120},
    {name:'banana',color:'green',pricePerKg:100},
    {name:'litchi',color:'darkred',pricePerKg:125},
    {name:'guava',color:'green',pricePerKg:40},
    {name:'DragonFruit',color:'white',pricePerKg:200},
    {name:'grapes',color:'black',pricePerKg:95},
];
const convertToobj=(fruitArray1,keyfield)=>
fruitArray1.reduce((obj,item) => {
    obj[item[keyfield]]=item;
    return obj;
}, {});
const fruitobj=convertToobj(fruitArray,'name');
// console.log(fruitobj);
// console.log(fruitobj.apple);
// console.log(fruitobj.mango);
// console.log(fruitobj.grapes);
