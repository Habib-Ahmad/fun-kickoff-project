import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  textField: {
    '&.MuiTextField-root': {
      marginBottom: theme.spacing(4),
    },
    '&>.MuiOutlinedInput-root': {
      border: '1px solid #00000026',

      '&>.MuiOutlinedInput-notchedOutline': {
        display: 'none',
      },
    },
  },
  label: {
    marginTop: theme.spacing(-1.7),
    marginLeft: theme.spacing(-2),

    '&.MuiInputLabel-root': {
      color: theme.palette.secondary.main,
      fontSize: 14,
      fontWeight: '600',
      textTransform: 'uppercase',

      '&.Mui-focused': {
        color: theme.palette.secondary.main,
      },
    },
  },
  inputs: {
    '&.MuiOutlinedInput-input': {
      height: '1rem',
    },
  },
  forgot: {
    paddingRight: 10,
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
  submit: {
    '&.MuiButton-root': {
      backgroundColor: theme.palette.primary.main,
      boxShadow: 'none',

      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        boxShadow: 'none',
      },
    },
    width: 160,
    height: 56,
  },
}));

export default useStyles;
