import { render, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/styles';
import { theme } from '../../../themes/theme';
import SignUpForm from './SignUpForm';

const props = { handleSubmit: jest.fn() };

describe('SignUpForm tests', () => {
  test('smoke test', () => {
    render(
      <ThemeProvider theme={theme}>
        <SignUpForm {...props} />
      </ThemeProvider>,
    );
  });

  test('snapshot test', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <SignUpForm {...props} />
      </ThemeProvider>,
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('can input values and submit form', async () => {
    const { getByLabelText, getByText } = render(
      <ThemeProvider theme={theme}>
        <SignUpForm {...props} />
      </ThemeProvider>,
    );
    const name = getByLabelText('Name');
    expect(name).toBeInTheDocument();
    const email = getByLabelText('Email address');
    expect(email).toBeInTheDocument();
    const password = getByLabelText('Password');
    expect(password).toBeInTheDocument();
    const createBtn = getByText('Sign up');
    expect(createBtn).toBeInTheDocument();

    fireEvent.change(name, { target: { value: 'testUser' } });
    fireEvent.change(email, { target: { value: 'testUser@gmail.com' } });
    fireEvent.change(password, { target: { value: 'password123' } });

    fireEvent.click(createBtn);

    await waitFor(() => {
      expect(props.handleSubmit).toBeCalledWith(
        {
          email: 'testUser@gmail.com',
          name: 'testUser',
          password: 'password123',
        },
        expect.anything(),
      );
    });
  });
});
