import { professionalSkillsData } from "../../../Data/data"
import"./Skillcard.css"

export const printSkills=()=>{


    function printSkillCard(data){
        const card$$=document.querySelector("#professional_skills_container")
    
        data.forEach(element=>{
            
            card$$.innerHTML+=
            `<div class="skills-card">
                <h3>${element.name}</h3>
                <div class="image-professional-skill">
                    <img src=${element.image} alt="skill-image"/>
                </div>
            </div>`
        })
    
    }
    
    printSkillCard(professionalSkillsData)
    
    }
    