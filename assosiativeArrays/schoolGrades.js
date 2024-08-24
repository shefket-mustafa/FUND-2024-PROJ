function grades(array){
    let students={};
    let total=0;
    let average=0;
    for (const student of array) {
        let input=student.split(" ");
        let studentName=input.shift();
        for (let i = 0; i < input.length; i++) {
            total+=Number(input[i]);
        }
        average=total/input.length;
        students[studentName]=average;
        total=0;
        average=0;
    }
}

grades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])