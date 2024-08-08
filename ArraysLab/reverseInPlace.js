function reverseInPlace(array){

    const midIndex=Math.floor(array.length/2);
    for(let i=0; i<midIndex;i++){
        const j =array.length-1-i;
        

        const temp =array[i];
        array[i]=array[j];
        array[j]=temp;

    }

    console.log(array.join(" "));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);