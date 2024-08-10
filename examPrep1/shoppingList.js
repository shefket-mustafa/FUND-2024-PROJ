function shoppingList(array){
    let initialList=array.shift().split("!");

    let commands=array.shift().split(" ");
    let command=commands.shift();
    let item=commands.shift();

    while(command!=='Go'){
        if(command==='Urgent'){
            let index=initialList.indexOf(item);

            if(index === -1){
                initialList.unshift(item);
            }
        } else if(command==='Unnecessary'){
            let index=initialList.indexOf(item);

            if(index !== -1){
        initialList.splice(index,1);
            }
        } else if(command==='Correct'){
            let index=initialList.indexOf(item);
            let item2=commands.shift();

            if(index !== -1){
                initialList.splice(index,1,item2);
            }
        } else if(command==='Rearrange'){
            let index=initialList.indexOf(item);

            if(index !== -1){
               let itemToPush= initialList.splice(index,1);
               initialList.push(itemToPush);
            }
        }



         commands=array.shift().split(" ");
     command=commands.shift();
     item=commands.shift();
    }
    console.log(initialList.join(", "));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);