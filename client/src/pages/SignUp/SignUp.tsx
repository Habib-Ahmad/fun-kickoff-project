import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { Navbar } from '../../components/Navbar/Navbar';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { name, email, password }: { email: string; password: string; name: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; name: string }>,
  ) => {
    register(name, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
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
    <>
      <Navbar />
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={8} md={6} className={classes.item}>
          <Box minHeight={{ xs: '100vh', sm: '100%' }} className={classes.authWrapper}>
            <Box width="100%" maxWidth={400} p={3}>
              <Typography variant="h1" className={classes.welcome}>
                Sign up
              </Typography>

              <SignUpForm handleSubmit={handleSubmit} />

              <Box mt={6}>
                <AuthHeader linkTo="/login" asideText="Already a member?" btnText="Login" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
