import { EmptyStateComponent } from './empty-state.component';

describe('EmptyStateComponent', () => {
  let component: EmptyStateComponent;

  beforeEach(() => {
    component = new EmptyStateComponent();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});
