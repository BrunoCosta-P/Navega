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
  variavelDeControle: string = 'emptyState';

  constructor() {}

  ngOnInit(): void {
    this.atualizarComponenteDinamico();
  }

  showPlan(path: string) {
    this.variavelDeControle = path;
    this.atualizarComponenteDinamico();
  }

  atualizarComponenteDinamico() {
    const componentMap: ComponentMap = {
      contribution: ContributionComponent,
      emptyState: EmptyStateComponent,
    };

    this.componenteDinamico = componentMap[this.variavelDeControle] ?? null;
  }

  mudarComponente(novoValor: string) {
    this.variavelDeControle = novoValor;
    this.atualizarComponenteDinamico();
  }
}
