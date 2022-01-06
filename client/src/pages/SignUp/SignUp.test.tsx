import { render } from '@testing-library/react';
import SignUp from './SignUp';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { theme } from '../../themes/theme';

describe('SignUp tests', () => {
  test('smoke test', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      </ThemeProvider>,
    );
  });

  test('snapshot test', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      </ThemeProvider>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('can input values and submit form', async () => {
    const { getByText, getByRole } = render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      </ThemeProvider>,
    );
    const account = getByText('Already a member?');
    expect(account).toBeInTheDocument();
    const login = getByText('Login');
    expect(login).toBeInTheDocument();
    const title = getByRole('heading', { name: 'Sign up' });
    expect(title).toBeInTheDocument();
  });
});
