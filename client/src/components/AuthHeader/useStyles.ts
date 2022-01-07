import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  accBtn: {
    '&.MuiButton-root': {
      color: theme.palette.primary.main,
      textTransform: 'none',
      textDecoration: 'underline',
      justifyContent: 'flex-start',
      fontSize: '0.875rem',

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
}));

export default useStyles;
