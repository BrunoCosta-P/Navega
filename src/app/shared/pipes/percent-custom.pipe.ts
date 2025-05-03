import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentCustom',
  standalone: true,
})
export class PercentCustomPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value === null || value === undefined) {
      return '';
    }

    let numericValue: number;
    if (typeof value === 'string') {
      numericValue = parseFloat(value.replace(',', '.'));
      if (isNaN(numericValue)) {
        return 'Valor Inválido';
      }
    } else {
      numericValue = value;
    }

    return `${numericValue}%`;
  }
}
