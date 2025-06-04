import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyEquinoxComponent } from './why-equinox.component';

describe('WhyEquinoxComponent', () => {
  let component: WhyEquinoxComponent;
  let fixture: ComponentFixture<WhyEquinoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyEquinoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyEquinoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
