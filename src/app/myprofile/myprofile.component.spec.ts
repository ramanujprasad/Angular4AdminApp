import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyprofileComponent } from './myprofile.component';
import { UserService } from '../services/user.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MyprofileComponent', () => {
  let component: MyprofileComponent;
  let fixture: ComponentFixture<MyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofileComponent,SidebarComponent ],
      imports: [
          RouterTestingModule,BrowserAnimationsModule
      ],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
