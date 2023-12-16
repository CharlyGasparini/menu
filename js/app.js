const navBtns = document.querySelectorAll(".nav-btn");
const DOMmenu = document.querySelector(".menu");

displayDishes(menu);

navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const filteredDishes = [];

        DOMmenu.innerHTML = "";
        const btnValue = btn.value;
        
        menu.forEach(dish => {
            if(dish.category === btnValue) filteredDishes.push(dish);
        })

        if(filteredDishes.length !== 0) {
            displayDishes(filteredDishes);
        } else {
            displayDishes(menu);
        }
    })
})


function displayDishes(dishes) {
    dishes.forEach(dish => {
        const item = document.createElement("article");
        item.classList.add("dish");
        item.setAttribute("value", `${dish.category}`);
    
        const img = document.createElement("img");
        img.setAttribute("src", `${dish.img}`);
    
        const info = document.createElement("span");
        info.classList.add("dish-info");
    
        const title = document.createElement("div");
        title.classList.add("dish-title");
    
        const name = document.createElement("h3");
        name.classList.add("dish-name");
        name.textContent = dish.title;
    
        const price = document.createElement("span");
        price.classList.add("dish-price");
        price.textContent = `$${dish.price}`;
    
        title.append(name, price);
    
        const text = document.createElement("p");
        text.textContent = dish.desc;
    
        info.append(title, text);
        item.append(img, info);
        DOMmenu.appendChild(item);
    })
}