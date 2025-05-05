import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter o título "Navega"', () => {
    expect(component.title).toBe('Navega');
  });
});