import { Component, OnInit } from '@angular/core';

/**
 * Страница с описанием компонента
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }

  /**
   * Инициализация компонента
   */
  ngOnInit() {
  }

}
