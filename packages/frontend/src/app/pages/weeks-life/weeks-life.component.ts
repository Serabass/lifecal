import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'underscore';

/**
 * Разбивка 100 лет по неделям
 */
@Component({
  selector: 'app-weeks-life',
  templateUrl: './weeks-life.component.html',
  styleUrls: ['./weeks-life.component.sass']
})
export class WeeksLifeComponent implements OnInit {

  public yearOffset = 0;

  /**
   * День моего рождения
   */
  private _myBd: Date;

  /**
   * День моего рождения
   */
  public get myBirthday(): Date {
    if (this._myBd) {
      return this._myBd;
    }
    let bd = localStorage.getItem('birthday');

    if (!bd) {
      let value = moment('1991-05-22').format('YYYY-MM-DD');
      localStorage.setItem('birthday', value);
      return moment(value).toDate();
    }

    return this._myBd = moment(bd).toDate();
  }

  public set myBirthday(val: Date) {
    localStorage.setItem('birthday', moment(val).format('YYYY-MM-DD'));
    this._myBd = val;
  }

  /**
   * Массив с неделями (всегда 52)
   */
  public weeksHeader = [];

  /**
   * Массив с годами
   */
  public years = [

  ];

  constructor() { }

  /**
   * Инициализация компонента
   */
  ngOnInit() {
    for (let week = 0; week <= 52; week++) {
      this.weeksHeader.push(week);
    }

    this.fillYears();
  }

  public fillYears() {
    this.years = [];
    for (let year = 0; year <=  20; year++) {
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
    let d = moment(this.myBirthday);
    d = d.add(year, 'year');
    d = d.add(week, 'week');
    return d.format('YYYY-MM-DD');
  }

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

  public wheel(event) {
    event.preventDefault();
    this.yearOffset += (event.deltaY * 3 / 100);
    this.yearOffset = Math.max(0, this.yearOffset);
    // _.debounce(() => this.fillYears(), 2000);
  }
}
