let images= [
"https://media.gettyimages.com/photos/spiderman-in-a-scene-from-the-film-spiderman-2002-picture-id159831398?k=20&m=159831398&s=612x612&w=0&h=kln17BydTNaP4QPPExcrRADINDUluY-bMfILudle7oQ=",
"https://wallup.net/wp-content/uploads/2019/09/858592-poster-movie-film-movies-posters-748x468.jpg",
"https://hips.hearstapps.com/hmg-prod/images/summer-movies-1587392939.jpg?resize=2048:*",
]

let slideshow=document.querySelector("#slideshow");
let id;
let i=0;

id=setInterval(function(){
    if(i===images.length){
        // clearInterval(id);
        i=0;
    }

    slideshow.innerHTML=null;

    let img=document.createElement("img");
    img.src=images[i];

    slideshow.append(img);

    i++;

},1000)

let movies=document.querySelector("#movies");
  let arrayFilm=JSON.parse(localStorage.getItem("moviesData"))||[];
function createMovies(n,p,r){
    this.movieName=n;
    this.movieImg=p;
    this.movieRating=r;
}
let obj1=new createMovies("Half Girlfriend","https://igimages.gumlet.io/hindi/gallery/movies/halfgirlfriend/half_poster.jpg?dpr=1.0&q=70&w=240",6);
let obj2=new createMovies("spiderman","https://media.gettyimages.com/photos/spiderman-in-a-scene-from-the-film-spiderman-2002-picture-id159831398?k=20&m=159831398&s=612x612&w=0&h=kln17BydTNaP4QPPExcrRADINDUluY-bMfILudle7oQ=",4);
let obj3=new createMovies("jaggajasoos","https://igimages.gumlet.io/hindi/gallery/movies/jaggajasoos/jagaajasoos_poster.jpg?dpr=1.0&q=70&w=200",2);
let obj4=new createMovies("Tubelight","https://igimages.gumlet.io/hindi/gallery/movies/tubelight/tubelight_poster.jpg?dpr=1.0&q=70&w=200",5);
let obj5=new createMovies("Bank chor","https://igimages.gumlet.io/hindi/gallery/movies/bankchor/bank_poster.jpg?dpr=1.0&q=70&w=200",3);
let obj6=new createMovies("Wedding Anniversary","https://igimages.gumlet.io/hindi/gallery/movies/weddinganniversary/wedding_poster.jpg?dpr=1.0&q=70&w=200",7);
let obj7=new createMovies("Bank chor","https://igimages.gumlet.io/hindi/gallery/movies/madaari/madari_poster.jpg?dpr=1.0&q=70&w=100",8);
let obj8=new createMovies("Madaari","https://igimages.gumlet.io/hindi/gallery/movies/bankchor/bank_poster.jpg?dpr=1.0&q=70&w=200",4);
let obj9=new createMovies("Bank chor","https://igimages.gumlet.io/hindi/gallery/movies/bankchor/bank_poster.jpg?dpr=1.0&q=70&w=200",5);
let obj10=new createMovies("Bank chor","https://igimages.gumlet.io/hindi/gallery/movies/bankchor/bank_poster.jpg?dpr=1.0&q=70&w=200",9);
let obj11=new createMovies("Madaari","https://igimages.gumlet.io/hindi/gallery/movies/madaari/madari_poster.jpg?dpr=1.0&q=70&w=100",7);
let obj12=new createMovies("Wedding Anniversary","https://igimages.gumlet.io/hindi/gallery/movies/weddinganniversary/wedding_poster.jpg?dpr=1.0&q=70&w=200",9);

arrayFilm.push(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12);
localStorage.setItem("moviesData",JSON.stringify(arrayFilm));
appendData(arrayFilm);

function appendData(arrayFilm){
arrayFilm.map(function(el){
  
    let div=document.createElement("div");
    let name=document.createElement("p");
    name.innerText=el.movieName;
    let img=document.createElement("img");
    img.src=el.movieImg;
    let rate=document.createElement("p");
    rate.innerText=el.movieRating;
    div.append(img,name,rate);
    movies.append(div);

});
}

document.querySelector("#sortby").addEventListener("onchange",sorting);
function sorting()
{
  var rating = document.querySelector("#sortby").value;
  if(rating==="high")
  {
    arrayFilm.sort(function (a,b) {
      return b.movieRating - a.movieRating;
    });
    
    appendData(arrayFilm)
  }
  if(rating==="low")
  {
   arrayFilm.sort(function (a,b) {
   return a.movieRating -b.movieRating;
 })
 appendData(arrayFilm)
  }
}
