import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  editProfile: {
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: theme.shape.borderRadius,
    width: '80%',
    height: '80%',
    padding: theme.spacing(4),
  },
  header: {
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}));

export default useStyles;
