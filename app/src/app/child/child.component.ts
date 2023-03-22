import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  changeValue(item:string){
    this.objdata[4].pincode = item
    }
    
  objdata = [
    {id:1,name:"ujas",city:"amreli",pincode:"365435"},
    {id:2,name:"abhay",city:"surat",pincode:"387344"},
    {id:3,name:"harshil",city:"babra",pincode:"380052"},
    {id:4,name:"vaibhav",city:"khakhriya",pincode:"332874"},
    {id:5,name:"het",city:"ahmedabad",pincode:"372623"},
   ]
  
  
 
}
