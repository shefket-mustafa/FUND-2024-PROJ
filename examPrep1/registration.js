function registration(string,array){

    //judge ne mi wzima inputa kato horata dawa greshka za inputa;
    let name=string;

    let command=array.shift();
    let tokens = command.split(" ");

    let toLower="";
    let toUpper="";
        let substringName=[];


    while(command!=="Registration"){

        if(tokens[0]==="Letters" && tokens[1]==="Lower"){
            for (let i = 0; i < name.length; i++) {
                toLower+=name[i].toLowerCase();
                         
            }
            name=toLower;
                console.log(name);
        } else if(tokens[0]==="Letters" && tokens[1]==="Upper"){
            for (let i = 0; i < name.length; i++) {
                    toUpper+=name[i].toUpperCase();
                   }
                   console.log(toUpper);

        } else if(tokens[0]==="Substring"){
            let substring=tokens[1];

            if(name.includes(substring)){
                let newIndex=0;

                let index= name.indexOf(substring);

                if(index!==-1){
                    newIndex=index;
                    
                    let newName=name.replace(substring,"");
                        console.log(newName);
                }
                } else {
                    console.log(`The username ${name} doesn't contain ${substring}.`);
            }
        } else if(tokens[0]==="Replace"){
                let char=tokens[1];

                if(name.includes(char)){
                    let index=name.indexOf(char);
                    if(index!==-1){
                        let newIndex=0;
                        newIndex=index;
                        let replaceOutput= name.replace(char,"-");
                        name=replaceOutput;
                        console.log(name);
                    }
                }
        } else if(tokens[0]==="IsValid"){
            let char=tokens[1];

            if(name.includes(char)){
                console.log("Valid username.");
            } else {
                console.log(`${char} must be contained in your username.`);
            }
        }
     


        command=array.shift();
        tokens=command.split(" ");
    }

}

registration('John',
    ['Letters Lower',
    'Substring SA',
    'IsValid @',
    'Registration'])