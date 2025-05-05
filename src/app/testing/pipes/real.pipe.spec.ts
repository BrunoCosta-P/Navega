import { RealPipe } from '../../shared/pipes/real.pipe';

describe('RealPipe', () => {
  let pipe: RealPipe;

  beforeEach(() => {
    pipe = new RealPipe();
  });

  it('deve ser criado', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve formatar números corretamente como moeda brasileira', () => {
    expect(pipe.transform(1000)).toBe('R$ 1.000,00');
    expect(pipe.transform(1234.56)).toBe('R$ 1.234,56');
    expect(pipe.transform(0)).toBe('R$ 0,00');
    expect(pipe.transform(-500)).toBe('R$ -500,00');
  });

  it('deve formatar strings numéricas corretamente como moeda brasileira', () => {
    expect(pipe.transform('1000')).toBe('R$ 1.000,00');
    expect(pipe.transform('1234.56')).toBe('R$ 1.234,56');
    expect(pipe.transform('-500')).toBe('R$ -500,00');
  });

  it('deve lidar com strings contendo vírgulas como separador decimal', () => {
    expect(pipe.transform('1234,56')).toBe('R$ 1.234,56');
    expect(pipe.transform('-500,75')).toBe('R$ -500,75');
  });

  it('deve retornar "Valor Inválido" para strings não numéricas', () => {
    expect(pipe.transform('abc')).toBe('Valor Inválido');
    expect(pipe.transform('123abc')).toBe('Valor Inválido');
  });

});