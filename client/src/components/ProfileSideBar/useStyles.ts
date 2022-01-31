import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  profileSidebar: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(4),
  },
  link: {
    textDecoration: 'none',
  },
  sidebarBtn: {
    '&.MuiButton-root': {
      color: theme.palette.secondary.main,
      textTransform: 'none',
      justifyContent: 'flex-start',
      fontSize: '0.875rem',
      width: 100,
      marginBottom: theme.spacing(),
      fontWeight: 'lighter',

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  activeSidebarBtn: {
    '&.MuiButton-root': {
      color: theme.palette.secondary.main,
      textTransform: 'none',
      justifyContent: 'flex-start',
      fontSize: '0.875rem',
      width: 100,
      marginBottom: theme.spacing(),
      fontWeight: 'bold',

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
}));

export default useStyles;
