import { Pipe, PipeTransform } from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {

  public constructor() {

  }

  private plural(value: any, {zero, one, few, many}: any) {
    if (value % 100 >= 11 && value % 100 <= 19) {
      return `${value.toLocaleString('en-US')} ${many}`;
    }

    if (value % 10 === 0) {
      return `${value.toLocaleString('en-US')} ${zero}`;
    }

    if (value % 10 === 1) {
      return `${value.toLocaleString('en-US')} ${one}`;
    }

    if (value % 10 >= 2 && value % 10 <= 4) {
      return `${value.toLocaleString('en-US')} ${few}`;
    }

    if (value % 10 >= 5 && value % 10 <= 9) {
      return `${value.toLocaleString('en-US')} ${many}`;
    }
  }

  transform(value: any, d: string): any {
    switch (d) {
      case 'years':
        return this.plural(value, {
          zero: 'лет',
          one: 'год',
          few: 'года',
          many: 'лет',
        });
      case 'months':
        return this.plural(value, {
          zero: 'месяцев',
          one: 'месяц',
          few: 'месяца',
          many: 'месяцев',
        });
      case 'days':
        return this.plural(value, {
          zero: 'дней',
          one: 'день',
          few: 'дня',
          many: 'дней',
        });
      case 'hours':
        return this.plural(value, {
          zero: 'часов',
          one: 'час',
          few: 'часа',
          many: 'часов',
        });
      case 'minutes':
        return this.plural(value, {
          zero: 'минут',
          one: 'минута',
          few: 'минуты',
          many: 'минут',
        });
      case 'seconds':
        return this.plural(value, {
          zero: 'секунд',
          one: 'секунда',
          few: 'секунды',
          many: 'секунд',
        });
      default:
        debugger;
    }
    return value + '...';
  }

}
