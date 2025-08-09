import { COLUMNS } from "../tools/constants";
export default class User{

    constructor({id,name,username,email,address}){
        this.id=id;
        this.name=name;
        this.username=username;
        this.email=email;
        this._address=address;

        this.remove=this.remove.bind(this)
    }

    get address(){
        return `${this._address.city} ${this._address.street}`
    }

    remove(event){
        // event.target.parentElement.remove()
        const el =document.getElementById(`tr-${this.id}`)
        el.remove()
    }

    render(){
        const tr=document.createElement("tr")
        tr.setAttribute("id",`tr-${this.id}`)

        COLUMNS.forEach((column)=>{
            const td =document.createElement("td")
            td.textContent=this[column];

            tr.appendChild(td)
        });
       

        const deleteAction =document.createElement("td")
        deleteAction.textContent="X";
        deleteAction.style.color="red";
        deleteAction.style.padding="5ps";
        deleteAction.style.cursor="pointer";
        deleteAction.addEventListener("click",this.remove)
        tr.appendChild(deleteAction)

        return tr

    }
}
