import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.sass']
})
export class YearsComponent implements OnInit {

  public currentYear: number;

  public decades = [];

  public decadeOffset = 0;

  public get myBirthday(): Date {
    let bd = localStorage.getItem('birthday');

    if (!bd) {
      return moment('1991-05-22').toDate();
    }
  }

  public set myBirthday(val: Date) {
    localStorage.setItem('birthday', moment(val).format('YYYY-MM-DD'));
  }

  constructor() {
  }

  ngOnInit() {

    this.currentYear = moment().year();

    for (let dec = 0; dec < 10; dec++) {
      let decade = [];
      for (let year = 0; year < 10; year++) {
        decade.push(year);
      }
      this.decades.push(decade);
    }
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
}
