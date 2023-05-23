import"./style.css"
import { printTemplate as Header } from "./components/Home/Header/Header";
import { printHomeTemplate } from "./components/Home/HomeTemplate/HomeTemplate";



const app=document.querySelector("#app")
const header$$=document.createElement("header")
const main$$=document.createElement("main")


main$$.id="main"

app.append(header$$,main$$)

Header()
printHomeTemplate()


