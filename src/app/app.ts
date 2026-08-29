import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { map } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  imports: [
    RouterOutlet,
    MatSidenavContent,
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
    MatCardTitle,
    NgClass,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly breakpointObserver = inject(BreakpointObserver);

  mobileQuery = toSignal(
    this.breakpointObserver.observe('(max-width: 600px)').pipe(map(({ matches }) => matches)),
    { initialValue: false },
  );
  header = 'Angular 22 new features';

  constructor() {}
}
