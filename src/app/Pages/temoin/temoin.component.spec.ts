import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoinComponent } from './temoin.component';

describe('TemoinComponent', () => {
  let component: TemoinComponent;
  let fixture: ComponentFixture<TemoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
