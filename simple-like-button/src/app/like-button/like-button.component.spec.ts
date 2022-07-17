import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LikeButtonComponent } from './like-button.component';

describe('LikeButtonComponent', () => {
  let component: LikeButtonComponent;
  let fixture: ComponentFixture<LikeButtonComponent>;
  const counterPrefix = '♥ ';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have counter with value 0 when initialized', () => {
    // Arrange
    const el = fixture.debugElement.query(By.css('.likeButton')).nativeElement;
    
    // Verify
    expect(el.textContent).toBe(counterPrefix + '0');
  })


  it('should increment counter by one when clicked', fakeAsync(() => {
    // Arrange
    const initEl = fixture.debugElement.query(By.css('.likeButton'));

    // Do
    initEl.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges(); // Required to trigger data binding and recognize counter change

    // Verify
    const clickedEl = fixture.debugElement.query(By.css('.likeButton'));
    expect(clickedEl.nativeElement.textContent).toBe(counterPrefix + '1');
  }));
});
