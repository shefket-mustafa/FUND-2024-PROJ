function songs(array){

    let music=[];
    class Song{
        
        constructor(typeList,name,time){
            this.typeList=typeList,
            this.name=name,
            this.time=time
        }

    }

    let songs=array.shift();
    let typeList=array.pop();

    for (const songs of array) {
        let input = songs.split("_");
        let type=input[0];
        let name=input[1];
        let time=input[2];

        if(typeList==='all'){
            music.push(name);
        } else if(type===typeList){
            music.push(name)
        }
    }
    for (const musics of music) {
        console.log(musics);
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);