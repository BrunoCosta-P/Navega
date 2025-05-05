import { HomeComponent } from './home.component';
import { ContributionComponent } from '../../modules/contribution/contribution.component';
import { EmptyStateComponent } from '../../modules/empty-state/empty-state.component';

describe('HomeComponent', () => {
  let component: HomeComponent;

  beforeEach(() => {
    component = new HomeComponent();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o componente dinâmico corretamente no ngOnInit', () => {
    jest.spyOn(component, 'atualizarComponenteDinamico');
    component.ngOnInit();
    expect(component.atualizarComponenteDinamico).toHaveBeenCalled();
    expect(component.componenteDinamico).toBe(ContributionComponent);
  });

  it('deve atualizar o componente dinâmico ao chamar showPlan', () => {
    jest.spyOn(component, 'atualizarComponenteDinamico');

    component.showPlan('emptyState');
    expect(component.variavelDeControle).toBe('emptyState');
    expect(component.atualizarComponenteDinamico).toHaveBeenCalled();
    expect(component.componenteDinamico).toBe(EmptyStateComponent);

    component.showPlan('contribution');
    expect(component.variavelDeControle).toBe('contribution');
    expect(component.componenteDinamico).toBe(ContributionComponent);
  });

  it('deve definir componenteDinamico como null para uma rota inválida', () => {
    component.showPlan('rotaInvalida');
    expect(component.variavelDeControle).toBe('rotaInvalida');
    expect(component.componenteDinamico).toBeNull();
  });

  it('deve mapear corretamente os componentes no método atualizarComponenteDinamico', () => {
    component.variavelDeControle = 'documents';
    component.atualizarComponenteDinamico();
    expect(component.componenteDinamico).toBe(EmptyStateComponent);

    component.variavelDeControle = 'taxation';
    component.atualizarComponenteDinamico();
    expect(component.componenteDinamico).toBe(EmptyStateComponent);

    component.variavelDeControle = 'contribution';
    component.atualizarComponenteDinamico();
    expect(component.componenteDinamico).toBe(ContributionComponent);
  });
});
