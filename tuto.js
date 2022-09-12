//variable modifiable = let//
let chiffre  =  24;
//variable non modifiable = const//
const chiffres = 99;
//concatenation avec + chaine de caractere entre 'string' "" + nom d'une variable//
let jesuis = "je suis le chiffre " + chiffre;
console.log(jesuis);
// concatenation avec les backstick `` //
let nombre = 123;
let nombreJeSuis = `je suis le nombre : ${nombre}degres`
console.log(nombreJeSuis)



//type de donnée//

//les chaine de caractere dit string//
let string = "chaine de caractere "
//les nombres//
let number = 23;
// les boolean oui ou non vrai ouo faux//
let boolean = true
// les tableau a mettre entre [] et "" mettre une virgule entre chaque donné entre "" pouvant etre un string number ou boolean//
let array =["je","paul","22"]
console.log(array);

//objet = {index :"valeur"}
let object = {
    prenom:"Ryo",
    age:34,
    Nom:"Nakata",
    ville:"Tokyo"
};
// null = non definie


// operateur//

//console.log(4+4)=8 multiplication addition soustraction division etc//

//operateur d'affectation//
let total = 0
total++ //ajoute 1 a la variable fontionne egalement avec les soustraction//
//console.log(total//)

//if else//
let x = 6
let y = 5

if (x < y){
    console.log("x est inferieur à y");
} else{
    console.log("x est superieur à y");}

    //-----construtor//
    class episode{
        constructor(title,duration,hasBeenWatched){
        this.title= title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched}
    }
        let firstEpisode= new episode("firstEpisode",60,true)
        let secondEpisode = new episode("ryo",60,false)
        let thirdEpisode = new episode("Ryo3", 59, false)
        console.log(episode);
        console.log(secondEpisode);

//=================================================array===//
let episodes = [firstEpisode,secondEpisode,thirdEpisode]
console.log(episodes);

//episodess.unshift(argument "firstEpisode) ajoute l'element en haut de array//

//===ajout element a la fin de l'array avec push===
let episodess = [];
episodess.push(firstEpisode,secondEpisode,thirdEpisode,thirdEpisode,firstEpisode);

//pop supprime le dernier element de la liste du tableau. pas besoin d'argument()
episodess.pop()

//La propriété   length  d'un tableau indique le nombre d'éléments qu'il contient//
let numberOfEpisodes =episodess.length;
console.log(episodess);