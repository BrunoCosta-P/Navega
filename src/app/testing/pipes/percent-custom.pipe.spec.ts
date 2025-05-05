import { PercentCustomPipe } from '../../shared/pipes/percent-custom.pipe';

describe('PercentCustomPipe', () => {
  let pipe: PercentCustomPipe;

  beforeEach(() => {
    pipe = new PercentCustomPipe();
  });

  it('deve ser criado', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve retornar uma string com "%" para valores numéricos', () => {
    expect(pipe.transform(50)).toBe('50%');
    expect(pipe.transform(0)).toBe('0%');
    expect(pipe.transform(-25)).toBe('-25%');
  });

  it('deve retornar uma string com "%" para valores numéricos em formato de string', () => {
    expect(pipe.transform('50')).toBe('50%');
    expect(pipe.transform('0')).toBe('0%');
    expect(pipe.transform('-25')).toBe('-25%');
  });

  it('deve lidar com strings contendo vírgulas como separador decimal', () => {
    expect(pipe.transform('50,5')).toBe('50.5%');
    expect(pipe.transform('-25,75')).toBe('-25.75%');
  });

  it('deve retornar "Valor Inválido" para strings não numéricas', () => {
    expect(pipe.transform('abc')).toBe('Valor Inválido');
    expect(pipe.transform('50abc')).toBe('Valor Inválido');
  });
});
