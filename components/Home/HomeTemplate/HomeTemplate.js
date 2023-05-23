import"./HomeTemplate.css"

const template=()=>{

    return`

<div class="home">
    <div class="photo_personal_container">
       
        <div class="personal_photo">
            <img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1683012442/portfolio/batman_oscuro_ulgjmz.jpg" alt="personal_foto">
         </div>
    </div>

    <div class="information-container">
        <h1>I'M FERRAN GÓMEZ</h1>
        <h2>FULL STACK DEVELOPER</h2>
        <p>No matter the paths that have made me get here, the important thing is now and enjoy the process.</p>
        <button>Contact</button>
    </div>
    
</div>`

}

export const printHomeTemplate=()=>{
    document.querySelector("main").innerHTML=template()
}