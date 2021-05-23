"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationSchema = void 0;
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
exports.LocationSchema = new mongoose_1.Schema({
    cityName: { type: String, required: true },
    planetName: { type: String, required: true },
    capacity: { type: Number, required: true }
});
var Location = mongoose_1.model("Location", exports.LocationSchema);
exports.default = Location;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJsb2NhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBa0Q7QUFFbEQsSUFBTSxHQUFHLEdBQVcsaUNBQWlDLENBQUM7QUFFdEQsa0JBQU8sQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFRO0lBQ3BCLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUN4QztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxjQUFjLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQ3ZDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMxQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDNUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0NBQzFDLENBQUMsQ0FBQztBQUVILElBQU0sUUFBUSxHQUFHLGdCQUFLLENBQUMsVUFBVSxFQUFFLHNCQUFjLENBQUMsQ0FBQztBQUNuRCxrQkFBZSxRQUFRLENBQUMifQ==