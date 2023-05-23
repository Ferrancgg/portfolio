import { onAboutBttClick } from "../../About/About";
import { onExperienceBttClick } from "../../Experience/Experience";
import { onProyectsBttClick } from "../../Proyects/proyects";



import { printHomeTemplate } from "../HomeTemplate/HomeTemplate";
import "./Header.css";

const template = () => {
  return `


<ul>
    <li><button class="homeBtt" id="homeBtt">Home</button></li>
    <li><button class="aboutBtt" id="aboutBtt">About</button></li>
    <li><button class="experienceBtt" id="experienceBtt">Experience</button></li>
    <li><button class="proyectsBtt" id="proyectsBtt">Proyects</button></li>
  
    
</ul>
  <div>
    <button class="modoBtt" id="modoBtt">modo</button>
</div>

    `;
};

const listeners = () => {

    ///CREAMOS EL BOTON DE MODO

    const modeBtt=document.querySelector("#modoBtt")

    modeBtt.addEventListener("click",()=>{
        document.body.classList.toggle("dark")
    } )

  //CREAMOS LA FUNCIONALIDAD PARA LE BOTON HOME
  const homeBtt = document.querySelector("#homeBtt");

  homeBtt.addEventListener("click", printHomeTemplate);

  //creamos la funcionalidad de ABOUT////
const buttonListener = document.querySelector("#aboutBtt");

  buttonListener.addEventListener("click", onAboutBttClick);

  ////CREAMOS FUNCIONALIDAD DE PROYECTS

  const proyectsBtt=document.querySelector("#proyectsBtt")

  proyectsBtt.addEventListener("click",onProyectsBttClick)

  ///// CREAMOS FUNCIONALIDAD DE EXPERIENCE///
  const experienceBtt = document.querySelector("#experienceBtt")

  experienceBtt.addEventListener("click", onExperienceBttClick);


 };

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  listeners();
};
