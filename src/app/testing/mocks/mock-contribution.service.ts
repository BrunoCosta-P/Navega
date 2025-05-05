import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contribution, ContributionService } from '../../shared/services/contribution.service';

@Injectable({
  providedIn: 'root'
})
export class MockContributionService  extends ContributionService {
  private readonly mockContribution: Contribution[] = [
    {
      value: 500,
      name: 'Contribuição mensal',
      percentage: 5,
      color: '#594CBE',
    },
    { value: 200, name: 'Contribuição voluntária', color: '#E22E6F' },
  ];
  override getContribution(): Observable<Contribution[]> {
    return of(this.mockContribution);
  }
}
