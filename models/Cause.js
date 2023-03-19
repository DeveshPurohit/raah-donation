const mongoose = require('mongoose');

const CauseSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true,},
    image: {type: String, required: true},
    amount: {type: Number, required: true},
  },{timestamps: true});

  export default mongoose.models.Cause || mongoose.model("Cause", CauseSchema);