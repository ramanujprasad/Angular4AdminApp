import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { TranslateService } from '../services/translate.service';
import { TranslatePipe }   from '../internationalization/translate.pipe';
import { TRANSLATION_PROVIDERS }   from '../internationalization/translations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, TranslatePipe ],
      providers: [TranslateService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent (HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
