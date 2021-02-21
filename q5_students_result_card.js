// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
var studentDetails = [
    {
        name:'Suryansh',
        subjects:[{"id":"Grammers","marks":82},{"id":"Accounts","marks":97},]
    },
    {
        name:'krishna',
        subjects:[{"id":"Grammers","marks":62},{"id":"Physics","marks":67},]
    }
];
var percentage=0;
var marks='';
function calculatePercentage(studentDetails){
    for(var students of studentDetails){
        students.subjects.forEach(function(item){percentage+=item['marks']});
        percentage=percentage/students.subjects.length;
        marks+=JSON.stringify({"name":students.name,"percentage":students.percentage});
    }
    return marks;
}