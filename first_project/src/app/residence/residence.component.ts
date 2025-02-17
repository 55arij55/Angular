import { Component } from '@angular/core';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {

  listfav:Residence[]=[]
  
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/téléchargement.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/téléchargement.jpg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/téléchargement.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/téléchargement.jpg", status: "En Construction"}
    ];
      search=""
      show(res:Residence){
        if(res.address=="inconnu"){
          alert("inconnu")
        }else{
          alert("adresse "+res.address)
        }
      }

      listfavoris(res:Residence){
        const index=this.listfav.findIndex(r=>r.id==res.id)
        if (index > -1){
          this.listfav.splice(index,1)
        }else{
          this.listfav.push(res)
          console.log("hayka tzedet"+JSON.stringify(this.listfav))
        }
      }

      isfavoris(res:Residence){
        return this.listfav.some(r=>r.id==res.id)
      }

}
