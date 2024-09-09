import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralContentComponent } from './central-content.component';

describe('CentralContentComponent', () => {
  let component: CentralContentComponent;
  let fixture: ComponentFixture<CentralContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
