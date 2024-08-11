function employees(array){

    let allEmployeess=[];
    for (const employeeName of array) {
            const personalNumber=employeeName.length;

            const employeeObject = {
                name: employeeName,
                personalNum: personalNumber
            };

            allEmployeess.push(employeeObject);
}
for (const employeeObject of allEmployeess) {
    console.log(`Name: ${employeeObject.name} -- Personal Number: ${employeeObject.personalNum} `);
}
}

employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);