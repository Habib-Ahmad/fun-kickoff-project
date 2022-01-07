import { render } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { theme } from '../../themes/theme';

describe('Login tests', () => {
  test('smoke test', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </ThemeProvider>,
    );
  });

  test('snapshot test', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </ThemeProvider>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('can input values and submit form', async () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </ThemeProvider>,
    );
    const account = getByText("Don't have an account?");
    expect(account).toBeInTheDocument();
    const create = getByText('Create account');
    expect(create).toBeInTheDocument();
    const title = getByText('Welcome back!');
    expect(title).toBeInTheDocument();
  });
});
