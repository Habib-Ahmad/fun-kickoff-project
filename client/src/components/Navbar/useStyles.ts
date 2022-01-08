import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  linkButton: {
    color: theme.palette.secondary.main,
    marginRight: 40,
    fontSize: 12,
    fontWeight: 'bold',

    '&:hover': {
      color: theme.palette.secondary.light,
    },
  },
}));

export default useStyles;
