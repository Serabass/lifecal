import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-weeks-life',
  templateUrl: './weeks-life.component.html',
  styleUrls: ['./weeks-life.component.sass']
})
export class WeeksLifeComponent implements OnInit {

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

  public weeksHeader = [];

  public years = [

  ];

  constructor() { }

  ngOnInit() {

    for (let week = 1; week <= 52; week++) {
      this.weeksHeader.push(week);
    }


    for (let year = 0; year < 100; year++) {
      let weeks = [];

      for (let week = 1; week <= 52; week++) {
        weeks.push(week);
      }

      this.years.push(weeks);
    }
  }

}
