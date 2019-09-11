import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {StorageService} from '../../services/storage.service';

/**
 * Разбивка 100 лет по неделям
 */
@Component({
  selector: 'app-weeks-life',
  templateUrl: './weeks-life.component.html',
  styleUrls: ['./weeks-life.component.sass']
})
export class WeeksLifeComponent implements OnInit {

  /**
   * Сдвиг по годам
   */
  public yearOffset = 0;

  /**
   * Массив с неделями (всегда 52)
   */
  public weeksHeader = [];

  /**
   * Массив с годами
   */
  public years = [

  ];

  constructor(public storage: StorageService) { }

  /**
   * Инициализация компонента
   */
  ngOnInit() {
    for (let week = 0; week <= 52; week++) {
      this.weeksHeader.push(week);
    }

    this.fillYears();
  }

  /**
   * Заполнить 30 лет
   */
  public fillYears() {
    this.years = [];
    for (let year = 0; year <=  30; year++) {
      let weeks = [];

      for (let week = 0; week <= 52; week++) {
        weeks.push(week);
      }

      this.years.push(weeks);
    }
  }

  /**
   * Текстовка для всплывашки на ячейке
   */
  public getWeekDate(year, week) {
    let d = moment(this.storage.myBirthday);
    d = d.add(year, 'year');
    d = d.add(week, 'week');
    return d.format('YYYY-MM-DD');
  }

  /**
   * Проверяем, прошла ли определённая неделя
   * @param year Год
   * @param week Неделя
   */
  public isLived(year, week) {
    return this.getWeekDate(year, week) <= moment().format('YYYY-MM-DD');
  }

  /**
   * Разблокировать ещё несколько лет
   *
   * @param years Количество лет
   */
  public addYears(years: number) {
    for (let i = 0; i < years; i++) {
      let weeks = [];

      for (let week = 0; week <= 52; week++) {
        weeks.push(week);
      }

      this.years.push(weeks);
    }
  }

  /**
   * Событие скролла
   *
   * @param event Событие
   */
  public wheel(event) {
    event.preventDefault();
    this.yearOffset += (event.deltaY * 3 / 100);
    this.yearOffset = Math.max(0, this.yearOffset);
    // _.debounce(() => this.fillYears(), 2000);
  }
}
