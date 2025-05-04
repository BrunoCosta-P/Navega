import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResponsivenessService implements OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly mobileBreakpoint = 768;
  private readonly isMobileSubject = new BehaviorSubject<boolean>(
    window.innerWidth < this.mobileBreakpoint
  );
  isMobile$ = this.isMobileSubject.asObservable();

  constructor() {
    fromEvent(window, 'resize')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.checkScreenWidth());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private checkScreenWidth(): void {
    this.isMobileSubject.next(window.innerWidth < this.mobileBreakpoint);
  }

  isGreaterThan(breakpoint: number): Observable<boolean> {
    return fromEvent(window, 'resize').pipe(
      map(() => window.innerWidth > breakpoint),
      takeUntil(this.destroy$)
    );
  }

  isLessThan(breakpoint: number): Observable<boolean> {
    return fromEvent(window, 'resize').pipe(
      map(() => window.innerWidth < breakpoint),
      takeUntil(this.destroy$)
    );
  }
}
