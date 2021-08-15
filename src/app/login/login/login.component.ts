import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string =""
  password:string =""
  isLogin:boolean = false
  checkLogin = (UName:string, pass:string)=>{
    if(UName === "cybersoft" && pass === "cybersoft"){
      this.isLogin = true;
      localStorage.setItem("username",UName);
      this.username = "cybersoft"
    }else{
      alert("tài khoảng hoặc mật khẩu không chính xác")
    }
  }
  checkLogout = () =>{
    localStorage.removeItem("username")
    this.isLogin = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
