import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTurnComponent } from './button-turn.component';

describe('ButtonTurnComponent', () => {
  let component: ButtonTurnComponent;
  let fixture: ComponentFixture<ButtonTurnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTurnComponent]
    });
    fixture = TestBed.createComponent(ButtonTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
