function companyUsers(array){

    const companyEmployees={};

    for (const employeeData of array) {
        
        const [company,employeeID]=employeeData.split(" -> ");

        if(company in companyEmployees) {
            if(!companyEmployees[company].includes(employeeID)){

            
            companyEmployees[company].push(employeeID);
            }
        } else {
            companyEmployees[company] = [employeeID];
        }
    }
    const companyEntries=Object.entries(companyEmployees);
    companyEntries.sort((a,b) => a[0].localeCompare(b[0]));

    for (const [companyName, employeeIDarray] of companyEntries) {
            console.log(companyName);
            
            for (const employeeID of employeeIDarray) {
                console.log(`-- ${employeeID}`);
            }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);