import { Pipe, PipeTransform } from '@angular/core';

/**
 * String.pad[Start|End] pipe
 */
@Pipe({
  name: 'pad'
})
export class PadPipe implements PipeTransform {

  /**
   * Трансформация
   * @param value Входящее значение
   * @param maxLength Макс. длина
   * @param fillString Строка для заполнения
   * @param type Тип (сначала или с конца)
   */
  transform(value: any, maxLength: number, fillString: string = ' ', type: 'start' | 'end' = 'start'): any {
    switch (type) {
      case 'start':
        return value.toString().padStart(maxLength, fillString);

      case 'end':
        return value.toString().padEnd(maxLength, fillString);
    }
  }

}
