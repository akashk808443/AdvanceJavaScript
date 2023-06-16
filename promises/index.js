function orderFood(){
    let food=document.querySelector("#food").value;
    let status="open";

    let orderPromises=new Promise(function(resolve,reject){
        if(status==="closed"){
            reject("Sorry you are Late");
        }
        else {
            setTimeout(function(){
                resolve(food);
            },1000);
        }
    });

    orderPromises.then(function(res){
        console.log(`${res} is ready`)
        display(res);
    })
    orderPromises.catch(function(err){
        console.log(err);
    })
}


function display(res){
container.innerHTML=null;
 let img=document.createElement("img");

 if(res == "burger"){

img.src= "https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc="

        }
else if(res == "samosa"){

img.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqjv-ZrbQVCzMDdor9Yv00VD60e5cizI1tw&usqp=CAU"

        }
else if(res == "coffee"){

img.src= "https://img.freepik.com/premium-photo/white-coffee-cup-coffee-beans_120795-569.jpg"

        }
else if(res == "papad"){

img.src= "https://thumbs.dreamstime.com/z/indian-food-roasted-papad-14696226.jpg"

    }
else if(res == "pizza"){

img.src= "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=400&q=80"

    }
else if(res == "coke"){

img.src= "https://media.istockphoto.com/photos/coke-picture-id458464735?k=20&m=458464735&s=612x612&w=0&h=CW8rzEiIMvuO23X9I3b6U_g2aBUQSZnWYLjWauLMxtg="

 }
else if(res == "beverage"){

img.src= "https://www.beveragedaily.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/01/02/2020-trends-to-watch-in-us-beverage/10484034-2-eng-GB/2020-trends-to-watch-in-US-beverage.jpg"

}

let h=document.createElement("h2");
h.innerText=`${res} is ready`;

document.querySelector("#container").append(h,img);


}