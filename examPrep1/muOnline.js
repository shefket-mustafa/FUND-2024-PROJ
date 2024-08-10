function muOnline(string){

        let initialHealth=100;
        let initialBitcoin=0;

    let rooms=string.split('|');

    for(let i=0; i< rooms.length; i++){

        let commands = rooms[i].split(" ");
        let command = commands.shift();
        let commandValue=Number(commands.shift());

        if(command==='potion'){

            let healthAdded = commandValue;
            if(initialHealth+healthAdded>100){
                healthAdded=100-initialHealth;
            }
            initialHealth+=healthAdded;
            console.log(`You healed for ${healthAdded} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if(command==='chest'){
            initialBitcoin+=commandValue;
            console.log(`You found ${commandValue} bitcoins.`);
        } else {
            if(initialHealth-commandValue>0){
                initialHealth-=commandValue;
                console.log(`You slayed ${command}.`);
                
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i+1}`);
                return;
            }
        }

    

        
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${initialBitcoin}`);
    console.log(`Health: ${initialHealth}`);

    
}

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');