import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * App component
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  /**
   * Titulo da pagina
   */
  title = 'angular-18';
}
