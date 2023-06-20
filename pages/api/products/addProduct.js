import Game from "../../../models/gameSchema";
import db from "../../../utils/db";

async function handler(req, res) {
  // if (req.method !== "POST") {
  //   return;
  // }

  const { name, price, slug, image, count, des } = req.body;
  if (!name || !price || !slug || !count || !des || !image) {
    res.status(422).json({
      message: "Validation error",
    });
    return;
  }
  await db.connect();
  const existingGame = await Game.findOne({ slug: slug });
  if (existingGame) {
    res.status(422).json({ message: "Game exists already!" });
    await db.disconnect();
    return;
  }
  const newGame = new Game({
    name,
    price,
    slug,
    image: `/images/${image}`,
    count,
    des,
  });
  const game = await newGame.save();
  await db.disconnect();
  res.status(201).json({
    message: "Created game!",
    _id: game._id,
    name: game.name,
    price: game.price,
    count: game.count,
    des: game.des,
    image: game.image,
    slug: game.slug,
  });
}
export default handler;
