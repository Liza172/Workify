import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname : {
    type: String,
    require : true,
  },
  email : {
    type: String,
    require : true,
  },
  phoneNumber : {
    type: String,
    require : true,
  },
  password : {
    type: String,
    require : true,
  },
  role : {
    type: String,
    enum : ['student','recruiter'],
    require : true,
  },
  profile:{
    bio : {type : String},
    skills:[{type: String}],
    resume: {type: String},
    resumeOriginalName : {type : String},
    company : {type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
    profilePhoto : {
      type: String,
      default: ""
    },
  }

  }, {timestamps:true});
  export const User = mongoose.model('User', userSchema);
