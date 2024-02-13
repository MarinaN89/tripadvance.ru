import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalStorageComponent } from './fiscal-storage.component';

describe('FiscalStorageComponent', () => {
  let component: FiscalStorageComponent;
  let fixture: ComponentFixture<FiscalStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiscalStorageComponent]
    });
    fixture = TestBed.createComponent(FiscalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
