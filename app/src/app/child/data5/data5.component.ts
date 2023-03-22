import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data5',
  templateUrl: './data5.component.html',
  styleUrls: ['./data5.component.css']
})
export class Data5Component {
  @Input() data5:{id:number,name:string,city:string,pincode:string} = {id:0,name:"",city:"", pincode:""}
  @Output() change = new EventEmitter<string>()
  
}
