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
import { ResponsivenessService } from '../../shared/services/responsiveness.service';
import { Subscription } from 'rxjs';

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
  @Output() closePlans = new EventEmitter<string>();

  activePath: string = 'contribution';
  plans: Plan[] = [];
  isMobile: boolean = false;
  private mobileSubscription: Subscription | undefined;

  constructor(
    private readonly planService: PlansService,
    private readonly sanitizer: DomSanitizer,
    private readonly matIconRegistry: MatIconRegistry,
    private readonly responsivenessService: ResponsivenessService
  ) {}

  ngOnInit(): void {
    this.mobileSubscription = this.responsivenessService.isMobile$.subscribe(
      (isMobile) => {
        this.isMobile = isMobile;
      }
    );

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
    if(this.isMobile) this.closePlans.emit();
    this.sendPath.emit(path);
  }

  ngOnDestroy(): void {
    if (this.mobileSubscription) {
      this.mobileSubscription.unsubscribe();
    }
  }

  getSafeSvgUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
