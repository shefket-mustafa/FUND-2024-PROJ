function computerStore(array){
    
    let totalPriceWithoutTax=0;
    let totalTax=0;

    let command=array.shift();

    while(command!=='special' && command!=='regular'){
        const partPriceWithoutTax=Number(command);

        

        if(partPriceWithoutTax<=0){
            console.log("Invalid price!");
            command=array.shift();
            continue;
        }

        totalPriceWithoutTax+=partPriceWithoutTax;

        command=array.shift();
    }

    const tax=0.2*totalPriceWithoutTax;
    let totalPriceTax=totalPriceWithoutTax+tax;

    if(command==='special'){
        totalPriceTax*=0.90;
    }
    if(totalPriceTax===0){
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`)
        console.log(`Taxes: ${tax.toFixed(2)}$`)
       console.log('-----------');
        console.log(`Total price: ${totalPriceTax.toFixed(2)}$`);
    }

    

}

computerStore([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ]);