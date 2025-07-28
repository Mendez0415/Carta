const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

//Abrir carta
btnAbrir.addEventListener("click", () => {
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");

    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    h1.style.transform = "translateY(-120px)";
    p.style.transform = "translateY(-120px)";
    h1.style.transform = "transform 0.65s ease-in-out";
    p.style.transform = "transform 0.65s ease-in-out";

    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.add("bx-rotada");
setTimeout(()=>{
    ElementoSuperior.style.zIndex = -1;
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje");
}, 700);
    

    
});

//Cerrar carta
btnCerrar.addEventListener("click", () =>{
    const ElementoSuperior = document.querySelector(".superior");
    

    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.remove("abrir-mensaje");
    
    setTimeout(()=>{
   const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    h1.style.transform = "translateY(0px)";
    p.style.transform = "translateY(0px)";
   

    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.remove("bx-rotada");

    ElementoSuperior.style.zIndex = 0;
    ElementoSuperior.classList.remove("abrir-superior");
}, 700);
});

//con un click en la carta
const contenedor = document.querySelector("AbrirContenedor");
contenedor.addEventListener("click", () => {
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");

    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    h1.style.transform = "translateY(-120px)";
    p.style.transform = "translateY(-120px)";
    h1.style.transform = "transform 0.65s ease-in-out";
    p.style.transform = "transform 0.65s ease-in-out";

    const IconoCorazon = document.querySelector(".bx");
    IconoCorazon.classList.add("bx-rotada");
setTimeout(()=>{
    ElementoSuperior.style.zIndex = -1;
    const ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje");
}, 700);
});