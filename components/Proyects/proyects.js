import { proyectsData } from "../../Data/data";
import { proyectCard } from "./proyect_card/proyect_card";

import "./proyects.css";

export const onProyectsBttClick = () => {
  const main$$ = document.querySelector("main");
  const cleanMain = () => {
    main$$.innerHTML = "";
  };
  cleanMain();
  const template = () => {
    main$$.innerHTML = `
    <div class="proyect_container">
    <h1>MY PORTFOLIO</h1>
    <div class="buscador">
      <button id="frontend"> Frontend</button>
      <button id="backend" >Backend</button>
      <button id="all" >All</button>
    </div>
    <div id="card_proyect_container" class="card_proyect_container">
    </div>
  </div>
    
    `;
  };
  template();

  const selectorBtt = () => {
    const frontendBtt$$ = document.querySelector("#frontend");
    const backendBtt$$ = document.querySelector("#backend");
    const allBtt$$ = document.querySelector("#all");
    const proyectContainer = document.querySelector("#card_proyect_container");

    const onFrontBttClick = () => {
      const cleanContainer = () => {
        proyectContainer.innerHTML = "";
      };
      cleanContainer();

      function searchFront(data) {
        data.forEach((element) => {
          if (element.type === "frontend") {
            proyectContainer.innerHTML += `
          <div class="card_container">
          <div class="proyect_image">
           <img
             src="${element.image}"
             alt="proyect-image"
             role="button"
        id="${element.num}"
           />
         </div>
         <button class="btt" id="${data.num}">saber mas</button>
         </div>      `;

            console.log("soy front");
          }
        });
      }
      searchFront(proyectsData);
    };

    const onBackBttClick = () => {
      const cleanContainer = () => {
        proyectContainer.innerHTML = "";
      };
      cleanContainer();

      function searchFront(data) {
        data.forEach((element) => {
          if (element.type === "backend") {
            proyectContainer.innerHTML += `
          <div class="card_container">
          <div class="proyect_image">
           <img
             src="${element.image}"
             alt="proyect-image"
             role="button"
        id="${element.num}"
           />
         </div>
         <button class="btt" id="${data.num}">saber mas</button>
         </div>      `;

            console.log("soy back");
          }
        });
      }
      searchFront(proyectsData);
    };

    const onAllBttClick = () => {
      const cleanContainer = () => {
        proyectContainer.innerHTML = "";
      };
      cleanContainer();

      function searchFront(data) {
        data.forEach((element) => {
          proyectContainer.innerHTML += `
          <div class="card_container">
          <div class="proyect_image">
           <img
             src="${element.image}"
             alt="proyect-image"
             role="button"
        id="${element.num}"
           />
         </div>
         <button class="btt" id="${data.num}">saber mas</button>
         </div>      `;

          console.log("soy todos");
        });
      }
      searchFront(proyectsData);
    };

    frontendBtt$$.addEventListener("click", onFrontBttClick);
    backendBtt$$.addEventListener("click", onBackBttClick);
    allBtt$$.addEventListener("click", onAllBttClick);
  };
  selectorBtt();

  proyectCard(proyectsData);
};
