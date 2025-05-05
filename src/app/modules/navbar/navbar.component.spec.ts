import { NavbarComponent } from './navbar.component';
import { ResponsivenessService } from '../../shared/services/responsiveness.service';
import { of, Subject } from 'rxjs';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let mockResponsivenessService: jest.Mocked<ResponsivenessService>;
  let isMobileSubject: Subject<boolean>;

  beforeEach(() => {
    // Mock do ResponsivenessService
    isMobileSubject = new Subject<boolean>();
    mockResponsivenessService = {
      isMobile$: isMobileSubject.asObservable(),
    } as jest.Mocked<ResponsivenessService>;

    // Instância do componente
    component = new NavbarComponent(mockResponsivenessService);
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve se inscrever no isMobile$ no ngOnInit e atualizar isMobile', () => {
    component.ngOnInit();

    // Simula a emissão de valores pelo isMobile$
    isMobileSubject.next(true);
    expect(component.isMobile).toBe(true);

    isMobileSubject.next(false);
    expect(component.isMobile).toBe(false);
  });

  it('deve desinscrever do isMobile$ no ngOnDestroy', () => {
    component.ngOnInit();
    const unsubscribeSpy = jest.spyOn(component['mobileSubscription']!, 'unsubscribe');

    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('não deve falhar ao chamar ngOnDestroy se mobileSubscription for undefined', () => {
    component.ngOnDestroy();
    expect(component).toBeTruthy(); // Apenas verifica que não lança erro
  });
});