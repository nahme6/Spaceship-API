import { connect, model, Schema } from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/local";

connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

export const LocationSchema = new Schema({
  cityName: { type: String, required: true },
  planetName: { type: String, required: true },
  capacity: { type: Number, required: true}
});

const Location = model("Location", LocationSchema);
export default Location;