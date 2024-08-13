function adAstra(array){

    let pattern=/([#|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let string = array.shift();

    let totalCalories=0;
    let match = pattern.exec(string);
    

    while(match){
        let itemName= match.groups.item;
        let expirationDate= match.groups.date;
        let calories=Number(match.groups.calories);
        match=pattern.exec(string);

        totalCalories+=calories;

    }

}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])