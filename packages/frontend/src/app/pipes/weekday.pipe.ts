import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'weekday'
})
export class WeekdayPipe implements PipeTransform {

  transform(value: any): any {
    let wd = moment(value).weekday();

    switch (wd) {
      case 1: return 'Понедельник';
      case 2: return 'Вторник';
      case 3: return 'Среда';
      case 4: return 'Четверг';
      case 5: return 'Пятница';
      case 6: return 'Суббота';
      case 7: return 'Воскресенье';
    }
    return '...';
  }

}
