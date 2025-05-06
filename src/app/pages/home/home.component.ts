import { Component, OnInit } from '@angular/core';
import { EmptyStateComponent } from '../../modules/empty-state/empty-state.component';
import { ContributionComponent } from '../../modules/contribution/contribution.component';
interface ComponentMap {
  [key: string]: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  componenteDinamico: any;
  variavelDeControle: string = 'contribution';
  showPlans: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.atualizarComponenteDinamico();
  }

  showPlan(path: string) {
    this.variavelDeControle = path;
    this.atualizarComponenteDinamico();
  }

  handleComponentPlans() {
    this.showPlans = !this.showPlans;
  }

  atualizarComponenteDinamico() {
    const componentMap: ComponentMap = {
      contribution: ContributionComponent,
      emptyState: EmptyStateComponent,
      extraContribution: EmptyStateComponent,
      extract: EmptyStateComponent,
      documents: EmptyStateComponent,
      taxation: EmptyStateComponent,
      benefit: EmptyStateComponent,
      regressive: EmptyStateComponent,
      information: EmptyStateComponent,
    };

    this.componenteDinamico = componentMap[this.variavelDeControle] ?? null;
  }
}
