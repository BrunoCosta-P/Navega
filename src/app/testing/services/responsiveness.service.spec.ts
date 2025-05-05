import { ResponsivenessService } from '../../shared/services/responsiveness.service';
import { BehaviorSubject, Subject } from 'rxjs';

describe('ResponsivenessService', () => {
  let service: ResponsivenessService;
  let originalInnerWidth: number;

  beforeEach(() => {
    service = new ResponsivenessService();
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', { value: originalInnerWidth, configurable: true });
    service.ngOnDestroy(); // Garante que o serviço é destruído após cada teste
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve emitir `true` para `isMobile$` se a largura da janela for menor que o breakpoint', () => {
    Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });
    service['checkScreenWidth']();
    service.isMobile$.subscribe((isMobile) => {
      expect(isMobile).toBe(true);
    });
  });

  it('deve emitir `false` para `isMobile$` se a largura da janela for maior ou igual ao breakpoint', () => {
    Object.defineProperty(window, 'innerWidth', { value: 800, configurable: true });
    service['checkScreenWidth']();
    service.isMobile$.subscribe((isMobile) => {
      expect(isMobile).toBe(false);
    });
  });

  it('deve emitir `true` para `isGreaterThan` se a largura da janela for maior que o breakpoint fornecido', (done) => {
    Object.defineProperty(window, 'innerWidth', { value: 900, configurable: true });
    service.isGreaterThan(768).subscribe((isGreaterThan) => {
      expect(isGreaterThan).toBe(true);
      done();
    });
    window.dispatchEvent(new Event('resize'));
  });

  it('deve emitir `false` para `isGreaterThan` se a largura da janela for menor ou igual ao breakpoint fornecido', (done) => {
    Object.defineProperty(window, 'innerWidth', { value: 700, configurable: true });
    service.isGreaterThan(768).subscribe((isGreaterThan) => {
      expect(isGreaterThan).toBe(false);
      done();
    });
    window.dispatchEvent(new Event('resize'));
  });

  it('deve emitir `true` para `isLessThan` se a largura da janela for menor que o breakpoint fornecido', (done) => {
    Object.defineProperty(window, 'innerWidth', { value: 700, configurable: true });
    service.isLessThan(768).subscribe((isLessThan) => {
      expect(isLessThan).toBe(true);
      done();
    });
    window.dispatchEvent(new Event('resize'));
  });

  it('deve emitir `false` para `isLessThan` se a largura da janela for maior ou igual ao breakpoint fornecido', (done) => {
    Object.defineProperty(window, 'innerWidth', { value: 800, configurable: true });
    service.isLessThan(768).subscribe((isLessThan) => {
      expect(isLessThan).toBe(false);
      done();
    });
    window.dispatchEvent(new Event('resize'));
  });

  it('deve completar o `destroy$` no ngOnDestroy', () => {
    const destroySpy = jest.spyOn(service['destroy$'], 'next');
    const completeSpy = jest.spyOn(service['destroy$'], 'complete');

    service.ngOnDestroy();

    expect(destroySpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });
});