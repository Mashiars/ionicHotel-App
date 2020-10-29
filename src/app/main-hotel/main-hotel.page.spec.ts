import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainHotelPage } from './main-hotel.page';

describe('MainHotelPage', () => {
  let component: MainHotelPage;
  let fixture: ComponentFixture<MainHotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainHotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
