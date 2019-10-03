import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PendienteService } from '../../services/pendiente.service';
import { Pendientes } from 'src/app/pendientes';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component ({
     selector: 'app-body',
     templateUrl: './body.component.html',
     styleUrls: ['./body.component.css']
})

export class BodyComponent  implements OnInit{

     listPendientes:any[] =[];
     contador: number =0;

    submitted = false;
    pendiente : Pendientes= new Pendientes();
   

    ngOnInit() {
     this.submitted=false;
   }

     constructor(private pendienteSerives: PendienteService){
          this.pendienteSerives.getAllPendientes().subscribe( (data:any) =>{
               this.listPendientes= data;
               this.contador = this.listPendientes.length;
          });
     }

     pendienteGet(pendieteUpdate){

          console.log(pendieteUpdate);
          this.pendiente= pendieteUpdate;
     }

     upPendiente(pendieteUpdate){
          this.pendiente = new Pendientes();
          this.pendiente.nombre = this.upNombre.value;
          this.pendiente.descripcion = this.upDescripcion.value;
          this.pendiente.idPendiente = this.upidPendiente.value;
          this.submitted = true;
          this.updatePendiente();
     }

     updatePendiente(){
          this.pendienteSerives.updatePendiente(this.pendiente.idPendiente, this.pendiente).subscribe(data=>{
               console.log(data);
               this.getPendientes();
          })
       }

     pendienteSaveForm = new FormGroup({
          nombre: new FormControl('', [Validators.required  ]),
          descripcion: new FormControl('', [Validators.required ])
        });

        pendienteUpdateForm = new FormGroup({
          nombre: new FormControl('', [Validators.required  ]),
          descripcion: new FormControl('', [Validators.required ]),
          idPendiente: new FormControl('', [Validators.required ])
        });

        get upNombre(){
          return this.pendienteUpdateForm.get('nombre');
        }
        get upDescripcion(){
          return this.pendienteUpdateForm.get('descripcion');
        }    
        get upidPendiente(){
          return this.pendienteUpdateForm.get('idPendiente');
        } 
  
        guardarPendiente(pendieteGuardar){
          this.pendiente = new Pendientes();
          this.pendiente.nombre= this.pendienteNombre.value;
          this.pendiente.descripcion= this.pendienteDescripcion.value;
          this.submitted = true;
          this.savePendiente();
        }
        getPendientes(){
          this.pendienteSerives.getAllPendientes().subscribe( (data:any) =>{
               this.listPendientes= data;
               if(data== null){
                    this.contador=0;     
               }else{
                    this.contador = this.listPendientes.length;
               }
          });
        }  

        savePendiente(){
             
            this.pendienteSerives.savePendientes(this.pendiente).subscribe(data=>{
               this.getPendientes();
            });
            this.pendiente = new Pendientes();
        }
  
        get pendienteNombre(){
          return this.pendienteSaveForm.get('nombre');
        }
        get pendienteDescripcion(){
          return this.pendienteSaveForm.get('descripcion');
        }    

        get pendienteidPendiente(){
          return this.pendienteSaveForm.get('idPendiente');
        }  

     deletePendiente(idPendiente: number){
          this.pendienteSerives.deletePendiente(idPendiente).subscribe((data:any) =>{
               console.log(data);
               this.getPendientes();
          },
          error=>{               
               console.log(error);
          }
          );
     }

}
