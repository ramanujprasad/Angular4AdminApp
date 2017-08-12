import { TranslatePipe } from './translate.pipe';
import { TestBed } from '@angular/core/testing';
import { TranslateService } from '../services/translate.service';

describe('Pipe: TranslatePipe', () => {

 xit('Should translate the content', () => {
     const fixture = TestBed.createComponent(TranslatePipe);
     const app = fixture.debugElement.componentInstance;
     const translateService = fixture.debugElement.injector.get(TranslateService);
     const spy = spyOn(translateService, 'instant').and.returnValue(Promise.resolve('Hallo'));
     fixture.detectChanges();
     expect(app.transform('')).toEqual('undefined');
 });
});
