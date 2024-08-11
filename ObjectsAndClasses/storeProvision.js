function storeProvision(stock,orderedProducts){
    
        let products= [];
    
        for (let i = 0; i < stock.length; i+=2) {
            
            let product = stock[i];
            let quantity=Number(stock[i+1]);
    
            let productObj= {name: product, qty: quantity};
            
            products.push(productObj);
        }
    
        for (let i = 0; i < orderedProducts.length; i+=2) {
            
            let product = orderedProducts[i];
            let quantity=Number(orderedProducts[i+1]);
    
            let productFound= products.find(p => p.name === product);
    
            if(productFound){
                productFound.qty+=quantity;
            } else {
    
            let productObj= {name: product, qty: quantity};
            products.push(productObj);
            }
        }
    
        for (const productObject of products) {
                console.log(`${productObject.name} -> ${productObject.qty}`);
        }
       
    
    }
    storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
        ],
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]);