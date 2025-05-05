import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});