import mongoose from 'mongoose'

const profileSchema = mongoose.Schema({
  profilePhoto: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  birthDate: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  availability: [
    {
      day: {
        type: String,
        enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      },
      date: Date,
      startTime: {
        type: String,
        enum: [
          '1 am',
          '2 am',
          '3 am',
          '4 am',
          '5 am',
          '6 am',
          '7 am',
          '8 am',
          '9 am',
          '10 am',
          '11 am',
          '12 am',
          '1 pm',
          '2 pm',
          '3 pm',
          '4 pm',
          '5 pm',
          '6 pm',
          '7 pm',
          '8 pm',
          '9 pm',
          '10 pm',
          '11 pm',
          '12 pm',
        ],
      },
      endTime: {
        type: String,
        enum: [
          '1 am',
          '2 am',
          '3 am',
          '4 am',
          '5 am',
          '6 am',
          '7 am',
          '8 am',
          '9 am',
          '10 am',
          '11 am',
          '12 am',
          '1 pm',
          '2 pm',
          '3 pm',
          '4 pm',
          '5 pm',
          '6 pm',
          '7 pm',
          '8 pm',
          '9 pm',
          '10 pm',
          '11 pm',
          '12 pm',
        ],
      },
    },
  ],
})

module.exports = Profile = mongoose.model("Profile", profileSchema);
