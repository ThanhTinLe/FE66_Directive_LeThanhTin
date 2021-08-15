import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { QuanLiSanPhamComponent } from './quan-li-san-pham/quan-li-san-pham.component';



@NgModule({
  declarations: [
    LoginComponent,
    QuanLiSanPhamComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
