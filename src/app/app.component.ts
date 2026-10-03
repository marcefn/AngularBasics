import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MenuComponent,
    LoggerModule,
    EjemploComponent,
    MatToolbarModule,
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularBasics';
}
