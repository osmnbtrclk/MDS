import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsService } from '../restaurants.service';
import { AddRestourantComponent } from './add-restourant.component';

describe('AddRestourantComponent', () => {
  let component: AddRestourantComponent;
  let fixture: ComponentFixture<AddRestourantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestourantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestourantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
