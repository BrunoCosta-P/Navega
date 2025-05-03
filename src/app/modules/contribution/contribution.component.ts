import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { RealPipe, PercentCustomPipe } from '../../shared/pipes/index.pipe';

interface Contribution 
 {
  percentage?: number;
  value: number;
  name: string;
}
@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.less'],
  standalone: true,
  imports: [MatCardModule, CommonModule, RealPipe, PercentCustomPipe],
})
export class ContributionComponent {
  contributions: Contribution[] = [
    { value: 2, name: 'home', percentage: 10 },
    { value: 3, name: 'list'  },
    { value: 4, name: 'settings'  },
    { value: 5, name: 'info'},
  ]
}
