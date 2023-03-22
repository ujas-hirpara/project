import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data2',
  templateUrl: './data2.component.html',
  styleUrls: ['./data2.component.css']
})
export class Data2Component {
  @Input() data2:{id:number,name:string,city:string,pincode:string} = {id:0,name:"",city:"", pincode:""}
}
