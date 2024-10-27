import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBigCardComponent } from './recent-big-card.component';

describe('RecentBigCardComponent', () => {
  let component: RecentBigCardComponent;
  let fixture: ComponentFixture<RecentBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentBigCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
