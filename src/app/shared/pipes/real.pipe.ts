import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'real',
  standalone: true
})
export class RealPipe implements PipeTransform {

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

    const formattedValue = numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: numericValue % 1 === 0 ? 2 : undefined, 
      maximumFractionDigits: 2, 
    });

    return formattedValue;
  }

}