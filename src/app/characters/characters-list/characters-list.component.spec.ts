import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';

import { CharactersListComponent } from './characters-list.component';
import { DataService, ConfigService } from 'app/core';

fdescribe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [CharactersListComponent],
      providers: [DataService, ConfigService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Before detectChanges', () => {
    it('should not have characters', () => {
      expect(component.chars.length).toEqual(0);
    });
  });

  describe('After detectChanges', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have Characters h2', () => {
      debugElement = fixture.debugElement.query(By.css('h2'));
      htmlElement = debugElement.nativeElement;
      expect(htmlElement.textContent).toEqual('Characters');
    });

    it('should have populate chars[]', () => {
      expect(component.chars.length).toBeGreaterThan(20);
    });
  });
});
