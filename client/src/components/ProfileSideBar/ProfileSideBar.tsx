import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

const ProfileSideBar = (): JSX.Element => {
  const [active, setActive] = useState('Edit Profile');
  const classes = useStyles();

  return (
    <Box className={classes.profileSidebar}>
      {urls.map((url) => (
        <Link key={url.link} to={`/profile-settings${url.link}`} className={classes.link}>
          <Button
            className={active === url.name ? classes.activeSidebarBtn : classes.sidebarBtn}
            onClick={() => setActive(url.name)}
            disableRipple
          >
            {url.name}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default ProfileSideBar;

const urls = [
  {
    name: 'Edit Profile',
    link: '/edit-profile',
  },
  {
    name: 'Profile Photo',
    link: '/profile-photo',
  },
  {
    name: 'Payment',
    link: '/payment',
  },
  {
    name: 'Security',
    link: '/security',
  },
  {
    name: 'Settings',
    link: '/settings',
  },
];
