import { Component } from '@angular/core';
import { Subject } from 'rxjs';

export interface User {
  userName: string
}

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component {
  firstVal: boolean = false;
  secondVal: boolean = true;

  user$: Subject<User | null> = new Subject();

  signIn() {
    this.user$.next({ userName: 'Steve' });
  }

  signOut() {
    this.user$.next(null);
  }
}
