function aMinerTask(array){
    let resourceQuantities={};

    for (let i = 0; i < array.length; i+=2) {
            let resource=array[i];
            let quantity=Number(array[i+1]);

            if(resourceQuantities.hasOwnProperty(resource)){
                resourceQuantities[resource]+=quantity;

            } else {
            resourceQuantities[resource]=quantity;
        }
    }
    
    const resourceEntries=Object.entries(resourceQuantities);
    
    for (const data of resourceEntries) {
        console.log(data.join(" -> "));
    }

}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])