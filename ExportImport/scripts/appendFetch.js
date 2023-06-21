const fetchApi = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data.meals;
  } catch (err) {
    console.log(err);
  }
};

const appendFood = (data, container) => {
  data.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.strMealThumb;
    let name = document.createElement("p");
    name.innerText = el.strMeal;
    let price = document.createElement("p");
    price.innerText = "Price" + ": " +"200";

    div.append(img, name,price);
    container.append(div);
  });
};
export { fetchApi, appendFood };
