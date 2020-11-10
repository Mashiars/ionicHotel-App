import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelPicturesPage } from './hotel-pictures.page';

describe('HotelPicturesPage', () => {
  let component: HotelPicturesPage;
  let fixture: ComponentFixture<HotelPicturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPicturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelPicturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
