import { Box, Typography } from '@mui/material';
import useStyles from './useStyles';

const EditProfile = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.editProfile}>
      <Typography className={classes.header}>Edit Profile</Typography>
    </Box>
  );
};

export default EditProfile;
