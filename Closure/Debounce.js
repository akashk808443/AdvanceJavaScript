let movies=document.querySelector("#movies");
let timerid;
async function searchMovies(){
      try{
      let movie=document.querySelector("#search").value;
      let res=await fetch(`https://www.omdbapi.com/?apikey=4ac9e285&s=${movie}`);
      let data= await res.json();
      appendMovie(data.Search);
      console.log("data",data.Search);
      } 
      catch (err){
        console.log("err",err);
      }
}

function appendMovie(data) {
        movies.innerHTML=null;

        data.forEach(function (el) {
             let div = document.createElement('div');
            let p=document.createElement("p");
            p.innerText=el.Title;

             let img=document.createElement("img");
             img.src=el.Poster;

            
            div.append(img,p);
            movies.append(div);
        });
}

async function main(){
    try{
        let data = await searchMovies();
        if (data===undefined) {
            return false;
        }
    appendMovie(data);
    }
    catch (err){
        console.log(err);
    }
}

function debounce(func,delay){
    if (timerid){
        clearTimeout(timerid);
    }

    timerid=setTimeout(function (){
        func();

    },delay)
}