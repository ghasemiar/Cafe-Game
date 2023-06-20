import Game from "../../../models/gameSchema";
import db from "../../../utils/db";

const handler = async (req, res) => {
  db.connect();
  try {
    await Game.findByIdAndDelete(req.body.id);
    res.status(200).send({
      success: true,
      message: "Product Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
  db.disconnect();
};
export default handler;
