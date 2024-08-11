function inventory(array){
    
    let heroes=[];

   for (const input of array) {
        let [name,level,items]=input.split(" / ");
        level=Number(level);

        let heroObj = {hero: name, level: level, items: items}
        heroes.push(heroObj);
        
   }
   let sortedHeroes=heroes.sort((a,b) => a.level - b.level);
   
    for (const object of sortedHeroes) {
        console.log(`Hero: ${object.hero}`);
        console.log(`level => ${object.level}`);
        console.log(`items => ${object.items}`);
    }

    
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);