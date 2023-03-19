import Cause from "../../models/Cause";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const {title , description, image, amount} = req.body
    let c = Cause({title, description, image, amount})
    await c.save()
    
    res.status(200).json({ success: "Successfully Submitted" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
