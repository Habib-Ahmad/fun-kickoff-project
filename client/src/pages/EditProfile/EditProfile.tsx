import { Box, Button, CircularProgress, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

interface Props {
  handleSubmit: (
    {
      firstName,
      lastName,
      gender,
      birthDate,
      email,
      phoneNumber,
      address,
      description,
    }: {
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: { month: string; day: string; year: string };
      email: string;
      phoneNumber: string;
      address: string;
      description: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: { month: string; day: string; year: string };
      email: string;
      phoneNumber: string;
      address: string;
      description: string;
    }>,
  ) => void;
}

const EditProfile = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.editProfile}>
      <Typography variant="h2" sx={{ marginBottom: 10 }}>
        Edit Profile
      </Typography>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          gender: '',
          birthDate: { month: '', day: '', year: '' },
          email: '',
          phoneNumber: '',
          address: '',
          description: '',
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('First Name is required'),
          lastName: Yup.string().required('Last Name is required'),
          birthDate: Yup.date().required('Date of birth is required'),
          email: Yup.string().required('E-mail is required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Box className={classes.formField}>
              <Typography className={classes.label}>First name</Typography>
              <TextField
                id="firstName"
                placeholder="John"
                fullWidth
                margin="normal"
                name="firstName"
                autoComplete="given-name"
                autoFocus
                helperText={touched.firstName ? errors.firstName : ''}
                error={touched.firstName && Boolean(errors.firstName)}
                value={values.firstName}
                onChange={handleChange}
              />
            </Box>

            <Box className={classes.formField}>
              <Typography className={classes.label}>Last name</Typography>
              <TextField
                id="lastName"
                placeholder="Doe"
                fullWidth
                margin="normal"
                name="lastName"
                autoComplete="family-name"
                helperText={touched.lastName ? errors.lastName : ''}
                error={touched.lastName && Boolean(errors.lastName)}
                value={values.lastName}
                onChange={handleChange}
              />
            </Box>

            <Box className={classes.formField}>
              <Typography className={classes.label}>Gender</Typography>
              <Box sx={{ width: '100%' }}>
                <TextField
                  id="gender"
                  placeholder="Male"
                  select
                  margin="normal"
                  name="gender"
                  autoComplete="sex"
                  style={{ width: '40%' }}
                  helperText={touched.gender ? errors.gender : ''}
                  error={touched.gender && Boolean(errors.gender)}
                  value={values.gender}
                  onChange={handleChange}
                >
                  <MenuItem disabled value="">
                    <em>Placeholder</em>
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Box>
            </Box>

            {/* <Box className={classes.formField}>
              <Typography className={classes.label}>Gender</Typography>
              <Box sx={{ width: '100%' }}>
                <Select
                  id="gender"
                  name="gender"
                  autoComplete="sex"
                  style={{ width: '40%' }}
                  error={touched.gender && Boolean(errors.gender)}
                  value={values.gender}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Placeholder</em>;
                    }

                    return selected;
                  }}
                  onChange={handleChange}
                >
                  <MenuItem disabled value="">
                    <em>Placeholder</em>
                  </MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </Box>
            </Box> */}

            <Box className={classes.formField}>
              <Typography className={classes.label}>Birth Date</Typography>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Select
                  id="birthDate"
                  name="birthDate.month"
                  autoComplete="bday-month"
                  style={{ width: '40%' }}
                  error={touched.birthDate?.month && Boolean(errors.birthDate?.month)}
                  value={values.birthDate?.month}
                  onChange={handleChange}
                >
                  {months.map((month) => (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  ))}
                </Select>

                <Select
                  id="birthDate"
                  name="birthDate.day"
                  autoComplete="bday-day"
                  style={{ width: '28%' }}
                  error={touched.birthDate?.day && Boolean(errors.birthDate?.day)}
                  value={values.birthDate?.day}
                  onChange={handleChange}
                >
                  {days.map((month) => (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  ))}
                </Select>

                <Select
                  id="birthDate"
                  name="birthDate.year"
                  autoComplete="bday-year"
                  style={{ width: '28%' }}
                  error={touched.birthDate?.year && Boolean(errors.birthDate?.year)}
                  value={values.birthDate?.year}
                  onChange={handleChange}
                >
                  {months.map((month) => (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>

            <Box className={classes.formField}>
              <Typography className={classes.label}>Email address</Typography>
              <TextField
                id="email"
                placeholder="john-doe@gmail.com"
                fullWidth
                margin="normal"
                name="email"
                autoComplete="email"
                helperText={touched.email ? errors.email : ''}
                error={touched.email && Boolean(errors.email)}
                value={values.email}
                onChange={handleChange}
              />
            </Box>

            <Box className={classes.formField}>
              <Typography className={classes.label}>Where you live</Typography>
              <TextField
                id="address"
                placeholder="Address"
                fullWidth
                margin="normal"
                name="address"
                autoComplete="street-address"
                helperText={touched.address ? errors.address : ''}
                error={touched.address && Boolean(errors.address)}
                value={values.address}
                onChange={handleChange}
              />
            </Box>

            <Box className={classes.formField}>
              <Typography className={classes.label}>Describe yourself</Typography>
              <TextField
                id="description"
                placeholder="About you"
                fullWidth
                multiline
                margin="normal"
                name="description"
                helperText={touched.description ? errors.description : ''}
                error={touched.description && Boolean(errors.description)}
                value={values.description}
                onChange={handleChange}
              />
            </Box>

            <Box textAlign="center" marginTop={7}>
              <Button type="submit" variant="contained">
                {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default EditProfile;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  ' 0',
  ' 1',
  ' 2',
  ' 3',
  ' 4',
  ' 5',
  ' 6',
  ' 7',
  ' 8',
  ' 9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
];
