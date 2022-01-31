import { Box, Typography } from '@mui/material';
import useStyles from './useStyles';

const ProfilePhoto = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.editProfile}>
      <Typography className={classes.header}>Profile Photo</Typography>
    </Box>
  );
};

export default ProfilePhoto;
