import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
  selector: 'app-years2',
  templateUrl: './years2.component.html',
  styleUrls: ['./years2.component.sass']
})
export class Years2Component implements OnInit {

  public currentYear: number;

  public decades = [];

  public decadeOffset = 0;

  public myBirthday: Date = moment('1991-05-22').toDate();

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

  public isLived(year: number) {
    if (!this.myBirthday) {
      return false;
    }

    if (year > moment(this.myBirthday).year() && year <= moment().year()) {
      return true;
    }

    return false;
  }
}
