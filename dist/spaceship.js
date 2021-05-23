"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceshipSchema = void 0;
var mongoose_1 = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/local";
mongoose_1.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
var status;
(function (status) {
    status["DECOMMISSIONED"] = "D";
    status["MAINTAINENCE"] = "M";
    status["OPERATIONAL"] = "O";
})(status || (status = {}));
exports.SpaceshipSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    status: { type: String, enum: status, required: true },
    hangerLocation: { type: String, required: true }
});
var Spaceship = mongoose_1.model("Spaceship", exports.SpaceshipSchema);
exports.default = Spaceship;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2VzaGlwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic3BhY2VzaGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFrRDtBQUVsRCxJQUFNLEdBQUcsR0FBVyxpQ0FBaUMsQ0FBQztBQUV0RCxrQkFBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVE7SUFDcEIsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBQ3hDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFLLE1BSUo7QUFKRCxXQUFLLE1BQU07SUFDVCw4QkFBb0IsQ0FBQTtJQUNwQiw0QkFBa0IsQ0FBQTtJQUNsQiwyQkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSkksTUFBTSxLQUFOLE1BQU0sUUFJVjtBQUVZLFFBQUEsZUFBZSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUN4QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3ZDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ3JELGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztDQUNoRCxDQUFDLENBQUM7QUFFSCxJQUFNLFNBQVMsR0FBRyxnQkFBSyxDQUFDLFdBQVcsRUFBRSx1QkFBZSxDQUFDLENBQUM7QUFDdEQsa0JBQWUsU0FBUyxDQUFDIn0=