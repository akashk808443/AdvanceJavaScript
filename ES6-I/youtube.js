
//api=https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=cricket&key=AIzaSyB5fspBK5xIEzoJe51QuHqGZrUybo4M8Do 



let searchDiv=document.querySelector("#container");
const searchEngine = async ()=> {
   try{
    let input=document.querySelector("#search").value;
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=AIzaSyB5fspBK5xIEzoJe51QuHqGZrUybo4M8Do`);
    let data = await res.json();
    appendVideos(data.items)
    
   }
   catch(err){
    console.log(err);
   }
}

const appendVideos=(data)=>{
    data.forEach((el)=>{
       
    let div=document.createElement("div");

    let name=document.createElement("p");
    name.innerText=el.snippet.channelTitle

    let iframe=document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${el.id.videoId}`;
    iframe.allow="fullscreen";
    iframe.width="95%";
    iframe.height="95%";

    div.append(iframe,name);
    container.append(div);
    })
    
}