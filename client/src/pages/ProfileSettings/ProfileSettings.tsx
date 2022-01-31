import { Box } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import ProfileSideBar from '../../components/ProfileSideBar/ProfileSideBar';
import EditProfile from '../EditProfile/EditProfile';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';

const ProfileSettings = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* height is 100vh - navbar height - marginTop(which is value*6) */}
      <Box sx={{ display: 'flex', marginTop: 8, height: 'calc(100vh - 64px - 48px)' }}>
        <ProfileSideBar />
        <Box sx={{ flex: 2.5 }}>
          <Switch>
            <Route exact path="/profile-settings/edit-profile" component={EditProfile} />
            <Route exact path="/profile-settings/profile-photo" component={ProfilePhoto} />
          </Switch>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default ProfileSettings;
