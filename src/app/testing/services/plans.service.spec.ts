import { RealPlanService, Plan } from '../../shared/services/plans.service';

describe('RealPlanService', () => {
  let service: RealPlanService;

  beforeEach(() => {
    service = new RealPlanService();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar uma lista de planos', (done) => {
    service.getPlans().subscribe((plans: Plan[]) => {
      expect(plans).toBeDefined();
      expect(plans.length).toBe(8);

      // Verifica o primeiro plano
      expect(plans[0].path).toBe('extract');
      expect(plans[0].icon).toBe('../../assets/images/file-invoice-dollar.svg');
      expect(plans[0].label).toBe('Ver extrato');
      expect(plans[0].labelIcon).toBe('info');

      // Verifica o último plano
      expect(plans[7].path).toBe('information');
      expect(plans[7].icon).toBe('../../assets/images/info.svg');
      expect(plans[7].label).toBe('Informações');
      expect(plans[7].labelIcon).toBe('info');

      done();
    });
  });

  it('deve verificar se todos os planos possuem propriedades obrigatórias', (done) => {
    service.getPlans().subscribe((plans: Plan[]) => {
      plans.forEach((plan) => {
        expect(plan.path).toBeDefined();
        expect(plan.icon).toBeDefined();
        expect(plan.label).toBeDefined();
      });
      done();
    });
  });
});