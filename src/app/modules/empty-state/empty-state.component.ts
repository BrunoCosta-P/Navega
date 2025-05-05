import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from  '@angular/material/progress-spinner' ;

@Component({
  selector: 'app-empty-state',
  standalone: true,
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.less'],
  imports: [MatProgressSpinnerModule],
})
export class EmptyStateComponent {

}
