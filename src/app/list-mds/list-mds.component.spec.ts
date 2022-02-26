import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMDSComponent } from './list-mds.component';

describe('ListMDSComponent', () => {
  let component: ListMDSComponent;
  let fixture: ComponentFixture<ListMDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMDSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
