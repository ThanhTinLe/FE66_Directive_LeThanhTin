import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLiSanPhamComponent } from './quan-li-san-pham.component';

describe('QuanLiSanPhamComponent', () => {
  let component: QuanLiSanPhamComponent;
  let fixture: ComponentFixture<QuanLiSanPhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLiSanPhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLiSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
