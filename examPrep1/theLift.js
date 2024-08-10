function theLift(array){
    let peopleWaiting=Number(array.shift());
    //50/100 Judge;
    //4 people max per wagon;
    let maxCapacity=4;

    let liftState=array.shift().split(" ").map(Number);  

    for (let i = 0; i < liftState.length; i++) {
        
            while(liftState[i]<4 || peopleWaiting===0){
                if(peopleWaiting===0){
                    for (let k = 0; k < liftState.length; k++) {
                        if(liftState[k]<4){
                            console.log("The lift has empty spots!");
                            console.log(liftState.join(" "));
                            return;
                        }
                        
                    }
                } else if(liftState[liftState.length-1]===4){
                    console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
                    console.log(`${liftState.join(" ")}`);
                }
                liftState[i]++;
                peopleWaiting--;
            }
            
        }
        
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(`${liftState.join(" ")}`);

        
}


theLift([
    "20",
    "0 2 0"
   ])