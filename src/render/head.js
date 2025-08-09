import logo from "../assets/images/json-file.png"
import "../assets/scss/head.scss"
export default function renderHead(){

    const div =document.createElement("div")
    div.classList.add("Head")

    const h2 = document.createElement("h2")
    h2.textContent="User List";

    const img =document.createElement("img")
    img.setAttribute("src" ,logo)

    div.appendChild(img)
    div.appendChild(h2)
    return div;
}
