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
      numericValue = parseFloat(value.replace(',', '.')); // Garante que a vírgula seja tratada como separador decimal
      if (isNaN(numericValue)) {
        return 'Valor Inválido';
      }
    } else {
      numericValue = value;
    }

    const formattedValue = numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: numericValue % 1 === 0 ? 2 : undefined, // Garante 2 casas decimais se for inteiro
      maximumFractionDigits: 2, // Limita a 2 casas decimais
    });

    return formattedValue;
  }

}