import { RealContributionService, Contribution } from '../../shared/services/contribution.service';

describe('RealContributionService', () => {
  let service: RealContributionService;

  beforeEach(() => {
    service = new RealContributionService();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar uma lista de contribuições', (done) => {
    service.getContribution().subscribe((contributions: Contribution[]) => {
      expect(contributions).toBeDefined();
      expect(contributions.length).toBe(2);

      // Verifica a primeira contribuição
      expect(contributions[0].value).toBe(500);
      expect(contributions[0].name).toBe('Contribuição mensal');
      expect(contributions[0].percentage).toBe(5);
      expect(contributions[0].color).toBe('#594CBE');

      // Verifica a segunda contribuição
      expect(contributions[1].value).toBe(200);
      expect(contributions[1].name).toBe('Contribuição voluntária');
      expect(contributions[1].percentage).toBeUndefined();
      expect(contributions[1].color).toBe('#E22E6F');

      done();
    });
  });
});