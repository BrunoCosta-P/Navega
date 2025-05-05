import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'real',
  standalone: true,
})
export class RealPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value === null || value === undefined) {
      return '';
    }
  
    let numericValue: number;
    if (typeof value === 'string') {
      if (!/^-?\d+([.,]\d+)?$/.test(value)) {
        return 'Valor Inválido';
      }
      numericValue = parseFloat(value.replace(',', '.'));
    } else {
      numericValue = value;
    }
  
    const absoluteValue = Math.abs(numericValue);
  
    let formattedValue = absoluteValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    if (numericValue < 0) {
      formattedValue = `R$ -${formattedValue.replace('R$', '').trim()}`;
    }
  
    return formattedValue;
  }
}
