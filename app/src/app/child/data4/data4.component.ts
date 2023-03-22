import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data4',
  templateUrl: './data4.component.html',
  styleUrls: ['./data4.component.css']
})
export class Data4Component {
  @Input() data4:{id:number,name:string,city:string,pincode:string} = {id:0,name:"",city:"", pincode:""}
}
