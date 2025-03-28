import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
  name : {
    type: String,
    require : true,
  },
  description : {
    type: String,

  },
  website : {
    type: String,
  },
  location : {
    type: String,
  },
  logo : {
    type: String,
  },
  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "User",
    require : true,
  },
}, {timestamps : true})

export const company = mongoose.model("Company", companySchema);