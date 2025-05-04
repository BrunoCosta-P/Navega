import { Component, Output, EventEmitter } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Plan, PlansService } from '../../shared/services/plans.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.less'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class PlansComponent {
  @Output() sendPath = new EventEmitter<string>();
  plans: Plan[] = [];

  constructor(private readonly planService: PlansService) {}

  ngOnInit(): void {
    this.planService.getPlans().subscribe((data) => {
      this.plans = data;
    });
  }

  emitirInformacao(path: string) {
    this.sendPath.emit(path);
  }
}
