function heartDelivery(array){
    
    let neighborhood=array.shift().split("@").map(Number);

    let commands=array.shift().split(" ");
    
    let command=commands.shift();
    let jump=commands.shift();

    while(command!=="Love!"){

        for (let i = 0; i < neighborhood.length; i++) {
            
            
        }


        command=commands.shift();
        jump=commands.shift();
    }
}
heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]);