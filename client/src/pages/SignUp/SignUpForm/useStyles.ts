import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  textField: {
    '&.MuiTextField-root': {
      marginBottom: theme.spacing(3),
    },
  },
  label: {
    marginTop: theme.spacing(-1.7),
    marginLeft: theme.spacing(-2),

    '&.MuiInputLabel-root': {
      '&.Mui-focused': {
        color: theme.palette.secondary.main,
      },
    },
  },
}));

export default useStyles;
