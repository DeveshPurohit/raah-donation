import Donater from "../../models/Donater";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const {name , email, pan, amount} = req.body
    let d = Donater({name, email, pan, amount})
    await d.save()
    
    res.status(200).json({ success: "Successfully Donated" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
