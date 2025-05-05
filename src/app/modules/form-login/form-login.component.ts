import {
  ChangeDetectionStrategy,
  Component,
  signal,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subject, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form-login',
  standalone: true,
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.less'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLoginComponent implements OnInit, OnDestroy {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  version: string = '';
  errorMessage = signal('');
  hide = signal(true);
  private destroy$ = new Subject<void>(); 

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.version = '0.1.0';

    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntil(this.destroy$)) 
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnDestroy(): void {
    this.destroy$.next(); 
    this.destroy$.complete(); 
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  irParaHome() {
    if (this.email.invalid) {
      this.email.markAsTouched();
      return;
    }
    this.router.navigate(['/home']);
  }
}

