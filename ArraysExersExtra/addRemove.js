function addRemove(array) {

    let currentNum=1;

    let newArr=[];

    for (let i = 0; i < array.length; i++) {
        

        if(array[i] === 'add'){
            newArr.push(currentNum);
        } else if(array[i] === 'remove'){
            newArr.pop();
        }
        currentNum++;
    }

    if(newArr.length<1){
        console.log(`Empty`);
    } else {
        console.log(newArr.join(" "));
    }
}

addRemove(['remove', 'remove', 'remove'] );