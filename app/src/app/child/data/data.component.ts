import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
 @Input() data:{id:number,name:string,city:string,pincode:string} = {id:0,name:"",city:"", pincode:""}

}
