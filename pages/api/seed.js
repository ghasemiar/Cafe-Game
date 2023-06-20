// import Product from '../../models/Product';
import User from "../../models/User";
import Game from "../../models/gameSchema";
import data from "../../data/data.js";
import db from "../../utils/db";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Game.deleteMany();
  await Game.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
};
export default handler;
