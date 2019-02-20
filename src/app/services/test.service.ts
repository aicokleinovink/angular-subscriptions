import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class TestService {
  public observer: Subject<string>;

  constructor() {
    this.observer = new Subject();
  }
}
