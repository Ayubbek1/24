let color = document.querySelector("#col")
let btns = document.querySelectorAll(".buttons button")
let img = document.querySelector(".mac img")
let prices = document.querySelectorAll(".price button")
let cena = document.querySelector("#price")
const images = {
    "White":"./img/mbp14-silver-select-202110 1.png",
    "Grey":"./img/mbp14-spacegray-select-202110 1.png"
}
const obj = {
    "512 GB SSD":0,
    "1 TB SSD":200,
    "2 TB SSD":600,
    "4 TB SSD":1200
}
btns.forEach(btn =>{
    btn.onclick = () =>{
        const image = images[btn.getAttribute("data-btn")]
        img.setAttribute("src",image)
        color.innerHTML = btn.innerHTML
        for (const i of btns) {
            i.setAttribute("class", "grey")
        }
        btn.setAttribute("class", "white")
    }
})

prices.forEach(price =>{
    price.onclick = () =>{
        
        // console.log(cena)
        for (const i of prices) {
            i.setAttribute("class", "other")
        }
        price.setAttribute("class", "first")
        if(price.innerHTML == keys.obj){
            Number(cena.innerHTML.slice(1).replace(",",""))+obj[price.innerHTML]
        }

    }
})








// let btns = document.querySelectorAll(button)
// let img = document.querySelector(img)
// let obj = {
//     "white":"./img/mbp14-spacegray-select-202110 1.png",
//     "Grey":"img/mbp14-silver-select-202110 1.png"
// }
// btns.forEach(btn =>{
//     btn.onclick = () =>{
//         let key = btn.getAttribute("data-btn")
//         img.setatribute("src",obj[key])
//     }
// })
