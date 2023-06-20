import Game from "../../../models/gameSchema";
import db from "../../../utils/db";

async function handler(req, res) {
  await db.connect();

  const products = await Game.find({});
  res.status(200).json({
    success: true,
    message: "ALlProducts ",
    products,
  });

  await db.disconnect();
}
export default handler;
