import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { from, Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-template';
  showFiller = false;
  isHandeset$ = false;
  isLogin = false;
  constructor(private breakpointObserver: BreakpointObserver) {};

  ngOnInit() {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      console.log(`Handset: ${result.matches}`);
      this.isHandeset$ = result.matches
    });
  }

  setLogin() {
    this.isLogin = true;
  }

  setLogout() {
    this.isLogin = false;
  }
}
