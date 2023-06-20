import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    slug: { type: String, required: true },
    image: { type: String, required: true },
    count: { type: Number, required: true },
    des: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.models.Game || mongoose.model("Game", gameSchema);
export default Game;
// module.exports = mongoose.model("Game", gameSchema);
