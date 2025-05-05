import { FormLoginComponent } from './form-login.component';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let mockRouter: jest.Mocked<Router>;

  beforeEach(() => {
    // Mock do Router
    mockRouter = {
      navigate: jest.fn(),
    } as unknown as jest.Mocked<Router>;

    // Instância do componente
    component = new FormLoginComponent(mockRouter);
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar a versão no ngOnInit', () => {
    component.ngOnInit();
    expect(component.version).toBe('0.1.0');
  });

  it('deve atualizar a mensagem de erro corretamente', () => {
    // Caso: Campo vazio
    component.email.setValue('');
    component.email.markAsTouched();
    component.updateErrorMessage();
    expect(component.errorMessage()).toBe('You must enter a value');

    // Caso: Email inválido
    component.email.setValue('invalid-email');
    component.updateErrorMessage();
    expect(component.errorMessage()).toBe('Not a valid email');

    // Caso: Email válido
    component.email.setValue('test@example.com');
    component.updateErrorMessage();
    expect(component.errorMessage()).toBe('');
  });

  it('deve alternar o estado de visibilidade da senha ao clicar no botão', () => {
    const event = new MouseEvent('click');
    component.hide.set(true);
    component.clickEvent(event);
    expect(component.hide()).toBe(false);

    component.clickEvent(event);
    expect(component.hide()).toBe(true);
  });

  it('deve navegar para a rota /home ao chamar irParaHome', () => {
    component.irParaHome();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('não deve navegar para /home se o email for inválido', () => {
    component.email.setValue('');
    component.irParaHome();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});