import {getAllSpainClients} from "../module/clients.js"
import { getAllOficceCodeCity, getAllOficceCityAndMovil } from "../module/offices.js";
import { getAllFullNameAndEmail, getNameLastnameEmailBoss, getNameLastnamePosition} from "../module/employees.js";
export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = /* html */`
        <link rel="stylesheet" href="../css/myCard.css">
        `
    }
    async getAllFullNameDesign(){
        let data = await getAllSpainClients()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                            <div class="body__marck">
                                <p><b>Nombre del empleado: </b>${val.contact_name}</p>
                                <p><b>Ciudad: </b>${val.country}</p>
                            </div>
                    </div>
                </div>
                        `;
                    });
    }
    async getAllOficceCodeCityShow(){
        let data = await getAllOficceCodeCity()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>${val.code_office}</div>
                    </div>
                    <div class="card__body">
                            <div class="body__marck">
                                <p><b>Ciudad: </b>${val.city}</p>
                            </div>
                    </div>
                </div>
                        `;
        })
    }

    async getAllOficceCityAndMovilShow(){
        let data = await getAllOficceCityAndMovil()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>${val.code_office}</div>
                    </div>
                    <div class="card__body">
                            <div class="body__marck">
                                <p><b>Pais: </b>${val.country}</p>
                                <p><b>Movil: </b>${val.movil}</p>
                            </div>
                    </div>
                </div>
                        `;
        })
    }

    async getAllFullNameAndEmailShow(){
        let data = await getAllFullNameAndEmail()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                        <div>${val.name} ${val.lastname} </div>
                </div>
                <div class="card__body">
                        <div class="body__marck">
                            <p><b>Email: </b>${val.email}</p>
                        </div>
                </div>
            </div>
                    `;
        })
    }

    async getNameLastnameEmailBossShow(){
        let data = await getNameLastnameEmailBoss()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                        <div>${val.name} ${val.lastname} </div>
                </div>
                <div class="card__body">
                        <div class="body__marck">
                            <p><b>Email: </b>${val.email}</p>
                            <p><b>Posicion: </b>${val.position}</p>
                        </div>
                </div>
            </div>
                    `;
        })
    }

    async getNameLastnamePositionShow(){
        let data = await getNameLastnamePosition()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                        <div>${val.name} ${val.lastname} </div>
                </div>
                <div class="card__body">
                        <div class="body__marck">
                            <p><b>Posicion: </b>${val.position}</p>
                        </div>
                </div>
            </div>
                    `;
        })
    }

    static get observedAttributes(){
        return ["query"]
    }
    attributeChangedCallback(name,old,now){
        console.log(now);
        
        if(name === "query" && now == "getAllSpainClients") this.getAllFullNameDesign();
        if(name === "query" && now == "getAllOficceCodeCity") this.getAllOficceCodeCityShow();
        if(name === "query" && now == "getAllFullNameAndEmail") this.getAllFullNameAndEmailShow();
        if(name === "query" && now == "getNameLastnameEmailBoss") this.getNameLastnameEmailBossShow();
        if(name === "query" && now == "getNameLastnamePosition") this.getNameLastnamePositionShow();
        if(name === "query" && now == "getAllOficceCityAndMovil") this.getAllOficceCityAndMovilShow();
        
    }
}

