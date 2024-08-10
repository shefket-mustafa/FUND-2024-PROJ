function treasureHunt(array){
    
    let treasureChest=array.shift().split("|");

    let elements = array.shift().split(" ");
    let command=elements.shift();
    let stolenItems=[];
    let totalLengthOfWords=0; 
    let average=0;

    while (command!=="Yohoho!") {
        

        if(command==="Loot"){
            for (let i=0;i<elements.length;i++) {
                
                if(treasureChest.indexOf(elements[i])===-1){
                    treasureChest.unshift(elements[i]);
                }
            }
        } else if(command==="Drop"){
            let index=elements.shift();
            if(index>=0 && index<=treasureChest.length){
            let itemRemoveAndToEnd=treasureChest.splice(index,1);
            treasureChest.push(itemRemoveAndToEnd+"");
            }
        } else if(command==='Steal'){
            let index=elements.shift();
    
            stolenItems.push(treasureChest.splice(-index));
            let stolen=stolenItems.shift();
            console.log(stolen.join(", "));
        }
        elements=array.shift().split(" ");
        command=elements.shift();
    }

    for (let i=0; i<treasureChest.length;i++) {
        totalLengthOfWords+=treasureChest[i].length
        
    }
    average=totalLengthOfWords/treasureChest.length;
    if(treasureChest.length===0){
        console.log(`Failed treasure hunt.`);
        return;
    }

    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);



    
}


treasureHunt(["Diamonds|Silver|Shotgun|Gold", 
"Loot Silver Medals Coal",
 "Drop -1", 
 "Drop 1",
 "Steal 6", 
 "Yohoho!"]);