function guineaPig(array) {

  let foodKgs=Number(array.shift())*1000;
  let hayKgs=Number(array.shift())*1000;
  let coverQty=Number(array.shift())*1000;
  let pigWeigth=Number(array.shift())*1000;

  for (let i = 1; i <= 30; i++) {
      foodKgs-=300;

      if(i%2===0){
          let hayToGive = foodKgs*0.05;
          hayKgs-=hayToGive;
      }
      if(i%3===0){
          let coverToGive=pigWeigth/3;
          coverQty-=coverToGive;
      }   
  }
  if(foodKgs<=0 || hayKgs<=0 || coverQty<=0){
      console.log(`Merry must go to the pet store!`);
  } else {
      console.log(`Everything is fine! Puppy is happy!` + ` Food: `+(foodKgs/1000).toFixed(2) + `, Hay: `+(hayKgs/1000).toFixed(2) + `, Cover: `+(coverQty/1000).toFixed(2)+'.');
  }
}
guineaPig
  (["10","5","5.2","1"]);
