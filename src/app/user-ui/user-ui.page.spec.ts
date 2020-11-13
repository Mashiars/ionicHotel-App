import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserUiPage } from './user-ui.page';

describe('UserUiPage', () => {
  let component: UserUiPage;
  let fixture: ComponentFixture<UserUiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserUiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
