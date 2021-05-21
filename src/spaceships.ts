import { connect, model, Schema } from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/local";

connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connection to DB Successfull");
  }
});

enum status {
    DECOMMISSIONED = 'D',
    MAINTENANCE = 'M',
    OPERATIONAL = 'O'
};

export const SpaceshipSchema = new Schema({
  spaceshipName: { type: String, required: true },
  model: { type: String, required: true },
  status: { type: String, enum: status, required: true}
});

const Spaceships = model("Spaceships", SpaceshipSchema);
export default Spaceships;