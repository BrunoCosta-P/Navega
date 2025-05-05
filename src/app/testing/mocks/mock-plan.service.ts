import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plan, PlansService } from '../../shared/services/plans.service'; 

@Injectable()
export class MockPlanService extends PlansService {
  private readonly mockPlans: Plan[] = [
    { path: 'emptyState', icon: '../../assets/images/file-invoice-dollar.svg', label: 'Ver extrato', labelIcon: 'info' },
    { path: 'contribution', icon: '../../assets/images/envelope-open-dollar.svg', label: 'Contribuição Mensal', labelIcon: 'info' },
    { path: 'emptyState', icon: '../../assets/images/sack-dollar.svg', label: 'Contribuição Extra', labelIcon: 'info' },
    { path: 'emptyState', icon: '../../assets/images/file-alt.svg', label: 'Documentos', labelIcon: 'info' },
    { path: 'emptyState', icon: '../../assets/images/user-chart.svg', label: 'Regime de Tributação', labelIcon: 'info' },
    { path: 'emptyState', icon: '../../assets/images/comment-dollar.svg', label: 'Solicitar Benefício', labelIcon: 'info' },
    { path: 'emptyState', icon: '../../assets/images/file-chart-line.svg', label: 'Extrato Regressivo', labelIcon: 'info' },
    { path: 'emptyState', icon: '../../assets/images/info.svg', label: 'Informações', labelIcon: 'info' },
  ];

  override getPlans(): Observable<Plan[]> {
    return of(this.mockPlans);
  }
}