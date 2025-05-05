import { Component, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Plan, PlansService } from '../../shared/services/plans.service';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
  ],
})
export class PlansComponent {
  @Output() sendPath = new EventEmitter<string>();
  activePath: string = 'contribution';
  plans: Plan[] = [];

  constructor(
    private readonly planService: PlansService,
    private readonly sanitizer: DomSanitizer,
    private readonly matIconRegistry: MatIconRegistry
  ) {}

  ngOnInit(): void {
    this.planService.getPlans().subscribe((data) => {
      this.plans = data;
      this.plans.forEach((plan, index) => {
        if (plan.icon) {
          const iconName = `plan-icon-${index}`;
          this.matIconRegistry.addSvgIcon(
            iconName,
            this.sanitizer.bypassSecurityTrustResourceUrl(plan.icon)
          );
          plan['labelIcon'] = iconName;
        }
      });
    });
  }

  emitirInformacao(path: string) {
    this.activePath = path;
    this.sendPath.emit(path);
  }

  getSafeSvgUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
