import mongoose from 'mongoose'

const profileSchema = mongoose.Schema({
	profile_photo: {
    type: String,
  },
	first_name: {
    type: String,
    required: true,
  },
	last_name: {
    type: String,
    required: true,
  },
	gender: {
    type: String,
    enum: ['male', 'female'],
  },
	birth_date: {
    type: Date,
    required: true,
  },
	phone_number: {
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
      startTime: Date,
      endTime: Date,
    },
  ],
})

module.exports = Profile = mongoose.model("profile", profileSchema);
