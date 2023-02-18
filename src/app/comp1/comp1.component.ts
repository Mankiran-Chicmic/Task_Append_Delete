import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';
import { arr } from '../array';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit
{
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  xForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.minLength(6)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  loginUser(data:any)
  {
     console.log(this.xForm.value)
  }
  get user()
  {
    return this.xForm.get('user')
  }
  get password()
  {
    return this.xForm.get('password')
  }
  a=arr
  print(item:any)
  {
     arr.push(item);
     //console.log(arr)
  }
 
}
