import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociatyComponent } from './sociaty.component';

describe('SociatyComponent', () => {
  let component: SociatyComponent;
  let fixture: ComponentFixture<SociatyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociatyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
