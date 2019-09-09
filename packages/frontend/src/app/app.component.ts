import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  /**
   * Прячем сайдбар
   */
  public isCollapsed = false;

  /**
   * Отображаем модалку с выпуском
   */
  public showVideoModal = false;
}
