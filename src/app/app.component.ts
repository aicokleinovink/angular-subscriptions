import {Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TestComponent} from './components';

@Component({
  selector: 'app-root',
  template: `<ng-container #container></ng-container>`
})
export class AppComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef}) public container: ViewContainerRef;
  private componentFactory: ComponentFactory<TestComponent>;

  constructor(private cfr: ComponentFactoryResolver) {}

  public ngOnInit(): void {
    this.componentFactory = this.cfr.resolveComponentFactory(TestComponent);
    this.createComponentWithTimeout(0);
  }

  private createComponentWithTimeout(index: number): void {
    this.container.clear();
    this.container.createComponent(this.componentFactory);

    if (index < 500) {
      window.setTimeout(() => this.createComponentWithTimeout(index + 1), 4);
    } else {
      console.log('Ready!');
    }
  }
}
