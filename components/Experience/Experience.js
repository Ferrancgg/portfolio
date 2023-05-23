import { experienceData } from "../../Data/data";
import "./Experience.css";

export const onExperienceBttClick = () => {
  function printExperienceCard(data) {
    const main$$ = document.querySelector("main");

    const cleanMain = () => {
      main$$.innerHTML = " ";
    };
    cleanMain();
    const template = () => {
      main$$.innerHTML = ` 
        <div class="experience_container">
            <div class="title">
                <h1>EXPERIENCE</h1>
            </div>
            <div id="card" class="card_experience">

        
            </div>



        </div>
        `;
    };
    template();

    data.forEach((element) => {
      const container$$ = document.querySelector("#card");

      // console.log(element);
      container$$.innerHTML += `
        
        <div class="card">
            <div class="image-container">
                <div class="image">
                    <img src="${element.image}" alt="image-company">
                </div>
            </div>
            <div class="information-container">
                <p>${element.time}</p>
                <h3>${element.function}</h3>
                <p>${element.workplace}</p>
                <p>${element.description}</p>
                <a href="${element.web}">Conocer la empresa</a>
                
            </div>
        </div>
        
            `;
    });
  }

  printExperienceCard(experienceData);
};
