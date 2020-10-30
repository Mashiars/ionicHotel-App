import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccessfullBookPage } from './successfull-book.page';

describe('SuccessfullBookPage', () => {
  let component: SuccessfullBookPage;
  let fixture: ComponentFixture<SuccessfullBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessfullBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
