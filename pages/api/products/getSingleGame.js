import { execOnce } from "next/dist/shared/lib/utils";
import Game from "../../../models/gameSchema";
import db from "../../../utils/db";
export const handler = async (req, res) => {
  console.log("kos", req.body.slug);
  db.connect();
  try {
    const game = await Game.findOne({ slug: req.body.slug });
    res.status(200).json({
      success: true,
      message: "Single Product Fetched",
      game: game,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Eror while getitng single product",
      error,
    });
  }
  db.disconnect();
};
export default handler;
