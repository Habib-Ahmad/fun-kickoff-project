import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={6} className={classes.item}>
        <Box minHeight={{ xs: '100vh', sm: '100%' }} className={classes.authWrapper}>
          <Box width="100%" maxWidth={400} p={3}>
            <Typography variant="h1" className={classes.welcome}>
              Welcome back!
            </Typography>

            <LoginForm handleSubmit={handleSubmit} />

            <Box mt={6}>
              <AuthHeader linkTo="/signup" asideText="Don't have an account?" btnText="Create account" />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
