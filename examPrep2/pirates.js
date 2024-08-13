function pirates(array){

    let citiesData={};

    let command = array.shift();

    while(command!=='Sail'){
        let tokens = command.split("||");
        let cityName=tokens[0];
        let cityPopulation=Number(tokens[1]);
        let cityGold=Number(tokens[2]);

        if(cityName in citiesData){
            citiesData[cityName].cityPopulation +=cityPopulation;
            citiesData[cityName].cityGold+=cityGold;

            
        } else {
            citiesData[cityName]={population:cityPopulation, gold:cityGold};
            
            
        }


        command=array.shift();
    }

    command=array.shift();

    while(command!=='End'){

        let tokens=command.split("=>");
        let action = tokens.shift();
        let city = tokens.shift();

        if(action==='Plunder'){
            let peopleKilled=Number(tokens.shift());
            let goldStolen=Number(tokens.shift());

            citiesData[city].population-=peopleKilled;
            citiesData[city].gold-=goldStolen;

            console.log(`${city} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

            if(citiesData[city].population<=0 || citiesData[city].gold<=0){
                console.log(`${city} has been wiped off the map!`);

                delete citiesData[city];
            }


        } else if(action==='Prosper'){

            let goldAcquired = Number(tokens.shift());

            if(goldAcquired<0){
                console.log(`Gold added cannot be a negative number!`);
            } else {
                citiesData[city].gold+=goldAcquired;
                console.log(`${goldAcquired} gold added to the city treasury. ${city} now has ${citiesData[city].gold} gold.`);

            }
        }


        command=array.shift();
    }
    let cityEntries = Object.entries(citiesData);

    if(cityEntries.length===0){
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {

    console.log(`Ahoy, Captain! There are ${cityEntries.length} wealthy settlements to go to:`);

    for (const [cityName, cityStats] of cityEntries) {
        console.log(`${cityName} -> Population: ${cityStats.population} citizens, Gold: ${cityStats.gold} kg`);
    }
}

}

pirates((["Tortuga||345000||1250"
,"Santo Domingo||240000||630"
,"Havana||410000||1100"
,"Sail"
,"Plunder=>Tortuga=>75000=>380"
,"Prosper=>Santo Domingo=>180"
,"End"]));