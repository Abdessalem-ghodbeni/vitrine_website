import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemarcheComponent } from './demarche.component';

describe('DemarcheComponent', () => {
  let component: DemarcheComponent;
  let fixture: ComponentFixture<DemarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemarcheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
