
import "./About.css"
import { printSkills } from "./Skillcard/Skillcard"




export const onAboutBttClick=()=>{
    // console.log("soy del about")
    const main$$=document.querySelector("main")
    const cleanMain=()=>{
        main$$.innerHTML=" "
        
    }
    cleanMain()
    


    const template=()=>{
        return`
     
        <div class="about_container">
        <div class="title"> <h1>ABOUT ME</h1></div>
          <div class="personal_info_container">
              
                  <div class="block_left">
                  <ul>
                  <li>
                    <p><span>FIRST NAME:</span> Gómez</p>
                  </li>
                  <li>
                    <p><span>LAST NAME:</span> Gómez</p>
                  </li>
                  <li>
                    <p><span>NATIONALITY:</span> Gómez</p>
                  </li>
                  <li>
                    <p><span>FREELANCE:</span> available</p>
                  </li>
        
                  <li>
                    <p><span>ADDRESS:</span> Gómez</p>
                  </li>
                  <li>
                    <p><span>PHONE:</span> +34 645907992</p>
                  </li>
                  <li>
                    <p><span>EMAIL:</span> ferrancgg@gmail.com</p>
                  </li>
                  <li>
                    <p><span>Langages:</span> Spanish & English</p>
                  </li>
                </ul>
        
        
                  </div>
                  <div class="block_right">
                      <div class="summary_card">
                       <h2> 2+ </h2>
                          <p>Experience</p>
                      </div>
                      <div class="summary_card">
                       <h2> 50+ </h2>
                          <p>Completed proyects</p>
                      </div>
                      <div class="summary_card">
                       <h2> 80+ </h2>
                       <p>Happy customers</p>
                       </div>
                      <div class="summary_card">
                          <h2> Infinite </h2>
                          <p>lots of laughs along the way</p>
                      </div>
        
                  </div>
              
        
        
          </div>
          <h2> PROFESSIONALS SKILLS</h2> 
          
        
          <div id="professional_skills_container" class="professional_skills_container"  > 
        
          </div>
        
          <h2> PERSONAL SKILLS</h2>            
          <div id="personal_skills" class="personal_skills"  > 
                      <div class="personal_skills_card">
                          <div class="img_skill_personal">
                              <img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1684821848/portfolio/responsabilidad_zgnbds.png">
                          </div>
                          <h3>Responsible</h3>
                          <p>Being a father to three daughters forces you to assume responsibility and commitment.</p>
                      </div> 
                      <div class="personal_skills_card">
                          <div class="img_skill_personal">
                              <img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1684822011/portfolio/principios-morales_ojrx8w.png" alt="imagen-habilidad-personal">
                          </div>
                          <h3>Principles</h3>
                          <p>Empathy, leadership and teamwork.</p>
                      </div> 
                      <div class="personal_skills_card">
                          <div class="img_skill_personal">
                              <img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1684821906/portfolio/resiliencia_1_s8hjzp.png" alt="imagen-habilidad-personal">
                          </div>
                          <h3>Resilience</h3>
                          <p> Ability to adapt to change and learn.</p>
                      </div> 
          
        
        
               
          </div>
          
        </div>
        
    
    
    `


    }

    

    const printTemplate=()=>{
    document.querySelector("main").innerHTML=template()



    }
        cleanMain()
        printTemplate()
        printSkills()
      

}