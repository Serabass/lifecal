import { Injectable } from '@angular/core';
import * as moment from 'moment';

/**
 * Работа с LocalStorage
 */
@Injectable({
  providedIn: 'root',
})
export class StorageService {

  /**
   * День моего рождения
   *
   */
  private _myBd: Date;

  constructor() { }

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
}
