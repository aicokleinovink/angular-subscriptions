import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TestService} from '../services';

@Component({
  selector: 'app-test-component',
  template: `<h1>Test Component</h1>`
})
export class TestComponent implements OnDestroy {
  public value: string;
  private unsubscribe$: Subject<void>;

  constructor(private testService: TestService) {
    this.value = null;
    this.unsubscribe$ = new Subject();

    this.testService.observer
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => this.value = data);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
