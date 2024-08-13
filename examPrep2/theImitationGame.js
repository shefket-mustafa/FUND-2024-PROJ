function imitationGame(array){
    let message=array.shift();
    let splittedMessage=message.split("");

        while(array[0]!=='Decode'){
            let commands=array.shift().split("|");

            if(commands[0]==='Move'){
                let index=Number(commands[1]);
               for (let i = 0; i < index; i++) {
                let wordToPush=splittedMessage.shift();
                splittedMessage.push(wordToPush)
               }

        } else if(commands[0]==='Insert'){
            
            let index=Number(commands[1]);
            let value=commands[2];
            let action=splittedMessage.splice(index,0,value);

        } else if(commands[0]==='ChangeAll'){
                let toChange=commands[1];
                let changeWith=commands[2];

                for (const char of splittedMessage) {
                    let index=splittedMessage.indexOf(char)
                    if(char===toChange){
                        splittedMessage.splice(index,1,changeWith)
                    }
                } 
        }
}
console.log(`The decrypted message is: ${splittedMessage.join("")}`);

}

imitationGame(['zzHe','ChangeAll|z|l','Insert|2|o','Move|3','Decode'])