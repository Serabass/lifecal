import {ApplicationRef, Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import Diff = moment.unitOfTime.Diff;
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.sass']
})
export class YearsComponent implements OnInit {

  /**
   * Текущий год
   */
  public currentYear: number;

  /**
   * Выбранный в таблице год
   */
  public selectedYear: number;

  /**
   * Декады (десятилетки)
   */
  public decades = [];

  /**
   * Сдвиг по декадам
   */
  public decadeOffset = 0;

  constructor(public app: ApplicationRef, public storage: StorageService) {
  }

  /**
   * Инициализация компонента
   */
  ngOnInit() {
    this.currentYear = moment().year();
    this.selectedYear = moment().add(1, 'year').year();

    for (let dec = 0; dec < 10; dec++) {
      let decade = [];
      for (let year = 0; year < 10; year++) {
        decade.push(year);
      }
      this.decades.push(decade);
    }

    setInterval(() => this.app.tick(), 1000);
  }

  /**
   * Первый год текущей декады. 2017 -> 2010
   */
  public get currentDecade() {
    return this.currentYear - (this.currentYear % 10);
  }

  public getYear(i: number) {
    return (this.currentDecade - 50) + ((i - this.decadeOffset) * 10);
  }

  public getRealYear(i: number, y: number) {
    return this.getYear(i) + y;
  }

  public isLived(year: number) {
    if (!this.storage.myBirthday) {
      return false;
    }

    if (year >= moment(this.storage.myBirthday).year() && year <= moment().year()) {
      return true;
    }

    return false;
  }

  public wheel(event) {
    event.preventDefault();
    this.decadeOffset -= (event.deltaY / 100);
  }

  public selectYear(i: number, year: number) {
    this.selectedYear = this.getYear(i) + year;
  }

  public diff(to: any, d: Diff) {
    return Math.abs(moment().diff(`${to}-01-01`, d));
  }

  public w(to: any, d: Diff) {
    let bd = moment(this.storage.myBirthday);
    return Math.abs(bd.diff(`${to}-01-01`, d, false));
  }

  public get leftTitle() {
    if (this.selectedYear > this.currentYear) {
      return `До ${this.selectedYear} осталось`;
    }
    if (this.selectedYear < this.currentYear) {
      return `С ${this.selectedYear} прошло`;
    }
  }

  public get wTitle() {
    if (this.selectedYear > this.currentYear) {
      return `В ${this.selectedYear} вам будет`;
    }
    if (this.selectedYear < this.currentYear) {
      return `В ${this.selectedYear} вам было`;
    }
  }

  public get now() {
    return moment();
  }
}
