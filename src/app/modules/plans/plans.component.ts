import { Component, Output, EventEmitter  } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Plan {
  path: string;
  icon: string;
  label: string;
  labelIcon?: string;
}

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


 emitirInformacao(path: string) {
   this.sendPath.emit(path);
 }

  plans: Plan[] = [
    { path: 'emptyState', icon: 'home', label: 'Ver extrato', labelIcon: 'info'  },
    { path: 'contribution', icon: 'list', label: 'Contribuição Mensal', labelIcon: 'info'  },
    { path: 'emptyState', icon: 'settings', label: 'Contribuição Extra', labelIcon: 'info'  },
    { path: 'emptyState', icon: 'info', label: 'Documentos', labelIcon: 'info' },
    { path: 'emptyState', icon: 'home', label: 'Regime de Tributação', labelIcon: 'info'  },
    { path: 'emptyState', icon: 'list', label: 'Solicitar Benefício', labelIcon: 'info'  },
    { path: 'emptyState', icon: 'settings', label: 'Extrato Regressivo', labelIcon: 'info'  },
    { path: 'emptyState', icon: 'info', label: 'Informações', labelIcon: 'info' },
  ]

}
