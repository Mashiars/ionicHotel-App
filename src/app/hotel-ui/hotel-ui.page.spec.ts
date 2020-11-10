import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelUiPage } from './hotel-ui.page';

describe('HotelUiPage', () => {
  let component: HotelUiPage;
  let fixture: ComponentFixture<HotelUiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelUiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelUiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
