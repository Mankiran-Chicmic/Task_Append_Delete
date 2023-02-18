import { Component } from '@angular/core';
import {arr} from '../array'
import { Comp1Component } from '../comp1/comp1.component';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component 
{
  a=arr;
  delete(index:any)
  {
    arr.splice(index,1)
    console.log(arr)
  }

}
