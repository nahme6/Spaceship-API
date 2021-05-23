import { connect, model, Schema } from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/local";

connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

enum status{
  DECOMMISSIONED = 'D',
  MAINTAINENCE = 'M',
  OPERATIONAL = 'O'
}

export const SpaceshipSchema = new Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  status: { type: String, enum: status, required: true},
  hangerLocation: { type: String, required: true} 
});

const Spaceship = model("Spaceship", SpaceshipSchema);
export default Spaceship;