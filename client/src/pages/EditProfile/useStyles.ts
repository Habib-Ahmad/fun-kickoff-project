import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  editProfile: {
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    padding: theme.spacing(7, 10),
  },
  form: {
    width: '100%',
  },
  formField: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing(3),
    paddingRight: theme.spacing(10),

    '&>.MuiFormControl-root': {
      margin: 0,
    },
  },
  label: {
    '&.MuiTypography-root': {
      width: '170px',
      textAlign: 'end',
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2.8),
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },
}));

export default useStyles;
