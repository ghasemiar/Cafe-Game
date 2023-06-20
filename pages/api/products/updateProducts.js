import Game from "../../../models/gameSchema";
import db from "../../../utils/db";

async function handler(req, res) {
  const { id, name, price, slug, image, count, des } = req.body;

  if (!id || !name || !price || !slug || !count || !des || !image) {
    res.status(422).json({
      message: "Validation error",
    });
    return;
  }

  await db.connect();
  try {
    const updatedResult = await Game.findByIdAndUpdate(
      { _id: req.body.id },
      {
        name,
        price,
        slug,
        image: `/images/${image}`,
        count,
        des,
      }
    );
    console.log(updatedResult);
  } catch (error) {
    console.log(error);
  }
}
export default handler;
