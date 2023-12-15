const navBtns = document.querySelectorAll(".nav-btn");
const dishes = document.querySelectorAll(".dish");

navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const showClass = btn.value;

        dishes.forEach(dish => {
            if(showClass === "all") {
                dish.classList.remove("hide");
            } else {
                if(dish.classList.contains(showClass)){
                    dish.classList.remove("hide");   
                } else {
                    dish.classList.add("hide");
                }
            }
        })
    })
})