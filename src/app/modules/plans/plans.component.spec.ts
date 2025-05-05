import { PlansComponent } from './plans.component';
import { PlansService } from '../../shared/services/plans.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { of } from 'rxjs';

describe('PlansComponent', () => {
  let component: PlansComponent;
  let mockPlansService: jest.Mocked<PlansService>;
  let mockSanitizer: jest.Mocked<DomSanitizer>;
  let mockMatIconRegistry: jest.Mocked<MatIconRegistry>;

  beforeEach(() => {
    // Mock do PlansService
    mockPlansService = {
      getPlans: jest.fn(),
    } as unknown as jest.Mocked<PlansService>;

    // Mock do DomSanitizer
    mockSanitizer = {
      bypassSecurityTrustResourceUrl: jest.fn((url) => url),
    } as unknown as jest.Mocked<DomSanitizer>;

    // Mock do MatIconRegistry
    mockMatIconRegistry = {
      addSvgIcon: jest.fn(),
    } as unknown as jest.Mocked<MatIconRegistry>;

    // Instância do componente
    component = new PlansComponent(mockPlansService, mockSanitizer, mockMatIconRegistry);
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar os planos no ngOnInit e registrar ícones SVG', () => {
    const mockPlans = [
      { path: 'contribution', icon: 'icon1.svg', label: 'Plan 1', labelIcon: 'info' },
      { path: 'extraContribution', icon: 'icon2.svg', label: 'Plan 2', labelIcon: 'info' },
    ];
    mockPlansService.getPlans.mockReturnValue(of(mockPlans));

    component.ngOnInit();

    expect(mockPlansService.getPlans).toHaveBeenCalled();
    expect(component.plans).toEqual(mockPlans);
    expect(mockMatIconRegistry.addSvgIcon).toHaveBeenCalledWith(
      'plan-icon-0',
      'icon1.svg'
    );
    expect(mockMatIconRegistry.addSvgIcon).toHaveBeenCalledWith(
      'plan-icon-1',
      'icon2.svg'
    );
  });

  it('deve emitir o caminho correto ao chamar emitirInformacao', () => {
    const emitSpy = jest.spyOn(component.sendPath, 'emit');
    component.emitirInformacao('contribution');
    expect(component.activePath).toBe('contribution');
    expect(emitSpy).toHaveBeenCalledWith('contribution');
  });

  it('deve retornar uma URL segura ao chamar getSafeSvgUrl', () => {
    const url = 'icon.svg';
    const safeUrl = component.getSafeSvgUrl(url);
    expect(mockSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(url);
    expect(safeUrl).toBe(url);
  });
});