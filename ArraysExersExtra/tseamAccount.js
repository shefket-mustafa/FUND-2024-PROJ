function tseamAccount(array){

    let games = array.shift().split(" ");

    let input=array.shift();

    while(input!=='Play!'){
        let commands=input.split(" ");
        let action=commands[0];
        let game=commands[1];


        if(action==='Install'){
            
            if(games.indexOf(game) === -1){
                games.push(game);
            }
        } else if(action==='Uninstall'){
            let index = games.indexOf(game);

            if(index!==-1){
                games.splice(index,1);
            }
        } else if(action==='Update'){
            let index = games.indexOf(game);

            if(index!==-1){
                let gameToPush=games.splice(index,1);
                let gamePushh=gameToPush.shift();
                games.push(gamePushh);
            }
        } else if(action === 'Expansion'){
            let gameExpansion=game.split("-");
            let gameName=gameExpansion[0];
            let expansion=gameExpansion[1];

            let index = games.indexOf(gameName);

            if(index!==-1){
                let gameTopush=gameExpansion.join(":");
                games.splice(index+1,0,gameTopush)
            }

        }


        input=array.shift();
    }
    console.log(games.join(" "));
}

tseamAccount(['CS WoW Diablo'
,'Install LoL','Uninstall WoW'
,'Update Diablo','Expansion CS-Go'
,'Play!'])