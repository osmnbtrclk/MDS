import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMDSComponent } from './update-mds.component';

describe('UpdateMDSComponent', () => {
  let component: UpdateMDSComponent;
  let fixture: ComponentFixture<UpdateMDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMDSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
