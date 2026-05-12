import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [RouterModule, NavComponent, FooterComponent],
  template: `
   <style> 
    .container {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .header, .footer {     
        text-align: center;
        background-color: lightgray;
    }

    .content {
        flex: 8.5;
        overflow-y: auto;
    }

    .footer {
        flex: 0.5;
    }
</style>

<div class="container">
    <section class="header">
        <h1> {{title}} </h1>
        <uuu-nav></uuu-nav>
    </section>
    <section class="content">
        <router-outlet></router-outlet>
    </section>
    <section class="footer">
        <uuu-footer></uuu-footer>
    </section>
</div>

  `,
  styles: ``
})
export class LayoutComponent {
  @Input({required:true}) title = '';
  
}
