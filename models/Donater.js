const mongoose = require('mongoose');

const DonaterSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true,},
    pan: {type: String, required: true},
    amount: {type: Number, required: true},
  },{timestamps: true});

  // mongoose.models = {}
  // export default mongoose.model("User", UserSchema);
  export default mongoose.models.Donater || mongoose.model("Donater", DonaterSchema);