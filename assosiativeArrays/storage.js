function storage(array){

    let map= new Map();

    for (const input of array) {
        let tokens = input.split(" ");
        let item=tokens[0];
        let quantity=Number(tokens[1]);

        if(!map.has(item)){
            map.set(item, + quantity);
        } else {
            let currentQuantity=map.get(item);
            let newQuantity=currentQuantity+=quantity;
            map.set(item,newQuantity);
        }
    }
    for (const key of map) {
        console.log(key.join(" -> "));
    }
}
        
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);