"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.travelSchema = void 0;
var mongoose_1 = require("mongoose");
var spaceship_1 = __importDefault(require("./spaceship"));
var uri = "mongodb://127.0.0.1:27017/local";
mongoose_1.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.travelSchema = new mongoose_1.Schema({
    spaceshipId: { type: spaceship_1.default., required: true },
    planetName: { type: String, required: true },
    capacity: { type: Number, required: true }
});
var Location = mongoose_1.model("Location", LocationSchema);
exports.default = Location;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVsLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsidHJhdmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFDQUFrRDtBQUNsRCwwREFBb0M7QUFFcEMsSUFBTSxHQUFHLEdBQVcsaUNBQWlDLENBQUM7QUFFdEQsa0JBQU8sQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFRO0lBQ3BCLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUN4QztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxZQUFZLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQ3JDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxtQkFBUyxDQUFFLEFBQUQsRUFBRyxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2xELFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM1QyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7Q0FDMUMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxRQUFRLEdBQUcsZ0JBQUssQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDbkQsa0JBQWUsUUFBUSxDQUFDIn0=