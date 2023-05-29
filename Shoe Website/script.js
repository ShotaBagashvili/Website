let small_shoes = document.querySelectorAll(".small_shoes img");
let bigger_image = document.querySelector(".bigger_image img");
let shadow = document.querySelector(".shadow");
let shoes = document.querySelector(".shoes")
small_shoes.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        small_shoes.forEach((li2)=>{
            li2.classList.remove("border_color")
        })
        e.target.classList.add("border_color");
        e.target.style.borderColor = e.target.dataset.bg;
        bigger_image.src = e.target.src;
        shadow.style.background = e.target.dataset.bg;
        shoes.style.color = e.target.dataset.bg;
    })
})


document.getElementById('textbox_id').value;