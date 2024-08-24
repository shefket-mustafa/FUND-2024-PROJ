function meetings(array){

    let meetingBook={};

    for (const key of array) {
        let[weekDay,name]=key.split(" ");

        if(meetingBook.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`);
            continue;

        } else {
        meetingBook[weekDay]=name;
        console.log(`Scheduled for ${weekDay}`);
        }
    }

    for (const key in meetingBook) {
        console.log(`${key} -> ${meetingBook[key]}`);
    }
    }
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])