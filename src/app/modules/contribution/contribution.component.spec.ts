import { ContributionComponent } from './contribution.component';
import { ContributionService, Contribution } from '../../shared/services/contribution.service';
import { of } from 'rxjs';

describe('ContributionComponent', () => {
  let component: ContributionComponent;
  let mockContributionService: jest.Mocked<ContributionService>;

  beforeEach(() => {
    // Mock do serviço ContributionService
    mockContributionService = {
      getContribution: jest.fn(),
    } as unknown as jest.Mocked<ContributionService>;

    // Mock dos dados de contribuição
    const mockContributions: Contribution[] = [
      { value: 500, name: 'Contribuição Mensal', color: '#594CBE' },
      { value: 300, name: 'Contribuição Extra', color: '#E22E6F' },
    ];

    // Configurando o mock para retornar os dados
    mockContributionService.getContribution.mockReturnValue(of(mockContributions));

    // Criando a instância do componente
    component = new ContributionComponent(mockContributionService);
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar as contribuições no ngOnInit', () => {
    jest.spyOn(component, 'updateChartData');
    component.ngOnInit();

    expect(mockContributionService.getContribution).toHaveBeenCalled();
    expect(component.contributions.length).toBe(2);
    expect(component.contributions[0].name).toBe('Contribuição Mensal');
    expect(component.updateChartData).toHaveBeenCalled();
  });

  it('deve atualizar os dados do gráfico corretamente', () => {
    component.contributions = [
      { value: 500, name: 'Contribuição Mensal', color: '#594CBE' },
      { value: 300, name: 'Contribuição Extra', color: '#E22E6F' },
    ];

    component.updateChartData();

    expect(component.chartOptions.series).toEqual([500, 300]);
    expect(component.chartOptions.labels).toEqual(['Contribuição Mensal', 'Contribuição Extra']);
    expect(component.chartOptions.colors).toEqual(['#594CBE', '#E22E6F']);
  });

  it('deve calcular corretamente a soma dos valores das contribuições', () => {
    component.contributions = [
      { value: 500, name: 'Contribuição Mensal', color: '#594CBE' },
      { value: 300, name: 'Contribuição Extra', color: '#E22E6F' },
    ];

    const sum = component.sumContributionValues();
    expect(sum).toBe(800);
  });
});
