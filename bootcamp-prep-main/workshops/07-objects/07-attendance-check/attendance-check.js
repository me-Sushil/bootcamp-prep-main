let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
// classCheck('Monday'); // => ['Marnie', 'Shoshanna']
// classCheck('Wednesday'); // => ['Marnie', 'Lena']

function attendanceCheck (daysOfTheWeek){
    const presentStudents = [];

    for(let i = 0; i<classRoom.length; ++i){
        const studentObj = classRoom[i];
        const studentName = Object.keys(studentObj)[0];

        const studentsAttendanceArray = studentObj[studentName];

        for(let j=0; j<studentsAttendanceArray.length; ++j){
            const dayObj = studentsAttendanceArray[j];
            const nameOfDay = Object.keys(dayObj)[0];

            const presentOnDay = dayObj[nameOfDay];
            if(nameOfDay === daysOfTheWeek && presentOnDay){
                presentStudents.push(studentName);
            }

        } 
    }
    return presentStudents;
}

// console.log(attendanceCheck('Monday')); // => ['Marnie', 'Shoshanna']
// console.log(attendanceCheck('Wednesday')); // => ['Marnie', 'Lena']