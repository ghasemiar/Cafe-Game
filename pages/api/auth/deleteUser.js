import User from "../../../models/User";
import db from "../../../utils/db";

const handler = async (req, res) => {
  db.connect();
  try {
    await User.findByIdAndDelete(req.body.id);
    res.status(200).send({
      success: true,
      message: "User Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting User",
      error,
    });
  }
  db.disconnect();
};
export default handler;
