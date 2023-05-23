
import"./proyect_card.css"



 export function proyectCard(array) {
    const card$$ = document.querySelector(".card_proyect_container");
    


    array.forEach((data) => {
      
      card$$.innerHTML += `
           <div class="card_container">
        <div class="proyect_image">
         <img
           src="${data.image}"
           alt="proyect-image"
           role="button"
      id="${data.num}"
         />
       </div>
       <button class="btt" id="${data.num}">saber mas</button>
       </div>
      
         `
        ;
      // console.log(data.client);
      // const bttProyects = document.querySelector(".btt");
      // console.log(bttProyects);
      // const vamos = () => {
        // console.log("de una puta vez!!");
      // };
      // bttProyects.addEventListener("click", vamos);

      
    });


      const listeners=()=>{
        const bttProyects = document.querySelector(".btt");
        console.log(bttProyects)
        console.log("entran los listeners")

          const pintar=()=>{
             console.log("empieza a funcionar")
          }
      bttProyects.addEventListener("click",pintar)

}
    listeners
}

