function movies(array){
    
    let movieZ=[];
    

    for (const input of array) {
        if(input.includes('addMovie')){
            let tokens= input.split("addMovie ");
            let movieTitle=tokens[1];

            let movieObj={name: movieTitle};
            movieZ.push(movieObj);

    } else if(input.includes('directedBy')){
            let splitted=input.split(" directedBy ");   
            let movietitle=splitted[0];
            let directorName=splitted[1];

            let movieFound = movieZ.find(m=> m.name === movietitle);

            if(movieFound){
                movieFound.director = directorName;
            }

    } else if(input.includes('onDate')){
        let splitted = input.split(" onDate ");
        let movieName=splitted[0];
        let movieDate=splitted[1];

        let movieFound = movieZ.find(m => m.name === movieName);

        if(movieFound) {
            movieFound.date = movieDate;
        }
    }
}
let fullInfoMovies = movieZ.filter(m => m.name && m.date && m.director);

for (const fullinfoMovie of fullInfoMovies) {
    console.log(JSON.stringify(fullinfoMovie));
}

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);