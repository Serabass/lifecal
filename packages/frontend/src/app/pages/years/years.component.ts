import {ApplicationRef, Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import Diff = moment.unitOfTime.Diff;

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.sass']
})
export class YearsComponent implements OnInit {

  public currentYear: number;
  public selectedYear: number;

  public decades = [];

  public decadeOffset = 0;

  private _myBd: Date;

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

  constructor(public app: ApplicationRef) {
  }

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
    if (!this.myBirthday) {
      return false;
    }

    if (year >= moment(this.myBirthday).year() && year <= moment().year()) {
      return true;
    }

    return false;
  }

  public wheel(event) {
    event.preventDefault();
    this.decadeOffset -= event.deltaY / 100;
  }

  public selectYear(i: number, year: number) {
    this.selectedYear = this.getYear(i) + year;
  }

  public diff(to: any, d: Diff) {
    return Math.abs(moment().diff(`${to}-01-01`, d));
  }

  public get leftTitle() {
    if (this.selectedYear > this.currentYear) {
      return `До ${this.selectedYear} осталось`;
    }
    if (this.selectedYear < this.currentYear) {
      return `С ${this.selectedYear} прошло`;
    }
  }
}
