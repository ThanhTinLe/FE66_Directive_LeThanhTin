import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quan-li-san-pham',
  templateUrl: './quan-li-san-pham.component.html',
  styleUrls: ['./quan-li-san-pham.component.scss']
})
export class QuanLiSanPhamComponent implements OnInit {

  arrProduct:Product[] = [
    {maSP:'IP', tenSP:'Iphone', gia: 1000},
    {maSP:'IP1', tenSP:'Iphone 11', gia: 2000},
    {maSP:'IP2', tenSP:'Iphone 12', gia: 3000}
  ]
  newSP:Product ={
    maSP:'', tenSP:'', gia: 0
  }

  themSP = (ma:string, ten:string, giaSP:string)=>{
    this.newSP.maSP = ma;
    this.newSP.tenSP = ten;
    this.newSP.gia = Number(giaSP);
    this.arrProduct.push({...this.newSP});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
interface Product {
  maSP: String,
  tenSP: String,
  gia: Number
}


