import { Component } from '@angular/core';



@Component({
  selector: 'app-layout-container',
  template: `
<header>
  <app-nav></app-nav>
</header>
  <main>
      <section>
          <router-outlet></router-outlet>
      </section>
  </main>
<app-footer></app-footer>
  `,
})
export class LayoutContainerComponent {

  constructor() { }

}
