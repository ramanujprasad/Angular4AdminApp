import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { TranslateService } from '../services/translate.service';
import { TranslatePipe } from '../internationalization/translate.pipe';
import { TranslationProvider } from '../internationalization/translations';

describe('Component: HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, TranslatePipe ],
      providers: [
            TranslateService,
            TranslationProvider
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent (HeaderComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const translateService = fixture.debugElement.injector.get(TranslateService);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(component).toBeTruthy();
  });
});
