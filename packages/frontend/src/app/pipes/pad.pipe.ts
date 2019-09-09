import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pad'
})
export class PadPipe implements PipeTransform {

  transform(value: any, maxLength: number, fillString: string = ' ', type: 'start' | 'end' = 'start'): any {
    switch (type) {
      case 'start':
        return value.toString().padStart(maxLength, fillString);

      case 'end':
        return value.toString().padEnd(maxLength, fillString);
    }
  }

}
