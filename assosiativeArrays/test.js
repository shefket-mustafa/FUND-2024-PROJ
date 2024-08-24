function manOwar(array){
    let pirateShip=array.shift().split(">");
    let warShip=array.shift().split(">");
    const maxHealth=array.shift();  
    let sections=0;
    let pirateShipStat=0;
    let warShipStat=0;

    let input = array.shift();
    let command=input.split(" ");

    while(command[0]!=="Retire"){
        if(command[0]==='Fire'){
            let index=command[1];
            let fire=Number(command[2]);

            if(warShip[index]){
                let takenNumber=warShip.splice(index,1);
                warShip.splice(index,0,takenNumber-fire);
                if(warShip[index]<=0){
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }

        } else if(command[0]==='Defend'){
            let startIndex=command[1];
            let endIndex=command[2];
            let damage=Number(command[3]);

            if(startIndex && endIndex>=0&&startIndex && endIndex<=pirateShip.length){
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i]-=damage;
                    if (pirateShip[i]<=0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if(command[0]==='Repair'){
            let index=command[1];
            let healthToAdd=Number(command[2]);

            if(pirateShip[index]){
                let number=Number(pirateShip.splice(index,1));
                if(number+healthToAdd>maxHealth){
                    healthToAdd=maxHealth-number;
                }
                number+=healthToAdd;
                pirateShip.splice(index,0,number);
            }

        } else if (command[0]==='Status'){
            for (let i = 0; i < pirateShip.length; i++) {
                let currentNum=Number(pirateShip[i]);
                if(currentNum<(maxHealth*0.2)){
                    sections++;
                }
            }
            if(sections>0){
                console.log(`${sections} sections need repair.`);
            }
        }
        input=array.shift();
        command=input.split(" ");
    }
    for (let i = 0; i < pirateShip.length; i++) {
        pirateShipStat+=Number(pirateShip[i]);
    }
    for (let j = 0; j < warShip.length; j++) {
        warShipStat+=Number(warShip[j]);
        
    }

    console.log(`Pirate ship status: ${pirateShipStat}`);
    console.log(`Warship status: ${warShipStat}`);

}

manOwar((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]));