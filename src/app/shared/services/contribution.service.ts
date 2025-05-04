import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Contribution {
  percentage?: number;
  value: number;
  name: string;
  color: string;
}

export abstract class ContributionService {
  abstract getContribution(): Observable<Contribution[]>;
}

@Injectable({
  providedIn: 'root',
})
export class RealContributionService extends ContributionService {
  override getContribution(): Observable<Contribution[]> {
    return of([
      {
        value: 500,
        name: 'Contribuição mensal',
        percentage: 5,
        color: '#594CBE',
      },
      { value: 200, name: 'Contribuição voluntária', color: '#E22E6F' },
    ]);
  }
}
