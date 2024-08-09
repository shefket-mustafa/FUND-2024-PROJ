function carWash(array) {
  let pecentage = 0;
    let value=10;

  for (const command of array) {

        if(command==='soap'){
            pecentage+=value;
        } else if(command==='water'){
            pecentage*=1.2;
        } else if(command==='vacuum cleaner'){
            pecentage*=1.25;
        } else if(command==='mud'){
            pecentage*=0.90;
        }
  }
  console.log(`The car is ${pecentage.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
