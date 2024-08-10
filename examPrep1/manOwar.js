function manOwar(array){
    
    let pirateshipStatus=array.shift().split(">");
    let warshipStatus=array.shift().split(">");

    let maximumHealth=Number(array.shift());

    let action= array.shift().split(" ");
    let command=action.shift();

    let criticalPirateShips=[];

    let sumWarship=0;
    let sumPirateship=0;

    while(command!=="Retire"){

        if(command==="Fire"){
            const index= action.shift();
            const damage=action.shift();

            if(index>=0&&index<=warshipStatus.length){
                let section=warshipStatus.splice(index,1);
                warshipStatus.splice(index,0,section-damage);
                if(warshipStatus[index]<=0){
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
            
        } else if(command==="Defend"){
            let startIndex=action.shift();
            let endIndex=action.shift();
            let damage=Number(action.shift());
            if(startIndex && endIndex>=0&&startIndex && endIndex<=pirateshipStatus.length){

                for (let i = startIndex; i <=endIndex; i++) {
                        let currentNum=Number(pirateshipStatus[i]);
                    currentNum-=damage;
                    pirateshipStatus.splice(i,1,currentNum);

                    if (pirateshipStatus[i]<=0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if(command==="Repair"){
            let index= action.shift();
            let healthToAdd=Number(action.shift());
            if(index>=0 && index<=pirateshipStatus.length){
                let sectionHeal=Number(pirateshipStatus.splice(index,1));
                if(sectionHeal+healthToAdd>maximumHealth){
                    pirateshipStatus.splice(index,0,70);
                } else {
                    pirateshipStatus.splice(index,0,sectionHeal+healthToAdd);
                }
            }
        } else if(command==="Status"){
            for (let i = 0; i < pirateshipStatus.length; i++) {
                if(Number(pirateshipStatus[i])<Number((maximumHealth*0.2))){
                    criticalPirateShips.push(pirateshipStatus[i]);
                }
                
                
            }
            console.log(`${criticalPirateShips.length} sections need repair.`);
        } 

        

         action= array.shift().split(" ");
     command=action.shift();
    }

    for (let index = 0; index < warshipStatus.length; index++) {
        sumWarship+=Number(warshipStatus[index]);
        
    }

    for (let j = 0; j < pirateshipStatus.length; j++) {
        sumPirateship+=Number(pirateshipStatus[j]);
        
    }

    console.log(`Pirate ship status: ${sumPirateship}`);
    console.log(`Warship status: ${sumWarship}`);
}

manOwar(["2>3>4>5>2",

"6>7>8>9>10>11",

"20",

"Status",

"Fire 2 3",

"Defend 0 4 11",

"Repair 3 18",

"Retire"]);