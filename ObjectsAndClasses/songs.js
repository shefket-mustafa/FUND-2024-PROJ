function songs(array){

    class Songs {
        typeList;
        name;
        time;

        constructor(typelist,name,time){
            this.typeList=typelist,
            this.name=name,
            this.time=time
        };
    }

    let numberOfSongs=array.shift();
    let typeOfSongs=array.pop();
    let songs=[];

    for (let i = 0; i < numberOfSongs; i++) {

        let[type,name,time]=array[i].split("_");

        let song = new Songs(type,name,time);
        
        songs.push(song);
    }
    if(typeOfSongs==="all"){

        songs.forEach((i)=> console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeOfSongs);
        filtered.forEach((i) => console.log(i.name));
    }


}   
songs([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite']);