import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeEdittorComponent } from './font-size-edittor.component';

describe('FontSizeEdittorComponent', () => {
  let component: FontSizeEdittorComponent;
  let fixture: ComponentFixture<FontSizeEdittorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSizeEdittorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizeEdittorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
