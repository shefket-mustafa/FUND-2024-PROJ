function reception(array){
    let perHour=Number(array[0])+Number(array[1])+Number(array[2]);
    let studentsCount=Number(array[3])
    let firstHour=1;
    let timeNeeded=1;

    while(studentsCount>=perHour){
        studentsCount-=perHour;
        
    

        if(firstHour===4){
            studentsCount+=perHour;
            firstHour=0;
            continue;
        }
        firstHour++;
        timeNeeded++;
    }

    console.log(`Time needed: ${timeNeeded}h.`);


}

reception(['1','2','3','45']);