import renderHead from "./head"
import renderTable from "./table";

const root =document.querySelector("#root")

export default function renderPage(data){
    root.appendChild(renderHead());
    root.appendChild(renderTable(data));
}