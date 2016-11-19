import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <!-- この要素の下にルーティング毎のviewが表示される -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
}
