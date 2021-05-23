"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLocation = exports.removeLocation = exports.getLocation = exports.allLocations = void 0;
var location_1 = __importDefault(require("../location"));
// Returns all locations in the database
var allLocations = function (req, res) {
    var locations = location_1.default.find(function (err, locations) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(locations);
        }
    });
};
exports.allLocations = allLocations;
// Returns a specific location given a location ID
var getLocation = function (req, res) {
    var location = location_1.default.findById(req.params.id, function (err, location) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(location);
        }
    });
};
exports.getLocation = getLocation;
// Removes a location from the database give location ID
var removeLocation = function (req, res) {
    var location = location_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted Location");
        }
    });
};
exports.removeLocation = removeLocation;
// Adds a new location to the database
var addLocation = function (req, res) {
    var location = new location_1.default(req.body);
    console.log(req.body);
    console.log(location);
    location.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(location);
            res.send(location);
        }
    });
};
exports.addLocation = addLocation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25Db250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiY29udHJvbGxlcnMvbG9jYXRpb25Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLHlEQUFtQztBQUVuQyx3Q0FBd0M7QUFDakMsSUFBSSxZQUFZLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNwRCxJQUFJLFNBQVMsR0FBRyxrQkFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVEsRUFBRSxTQUFjO1FBQ3JELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQjthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBUlMsUUFBQSxZQUFZLGdCQVFyQjtBQUVGLGtEQUFrRDtBQUMzQyxJQUFJLFdBQVcsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2pELElBQUksUUFBUSxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUSxFQUFFLFFBQWE7UUFDcEUsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFSUyxRQUFBLFdBQVcsZUFRcEI7QUFFRix3REFBd0Q7QUFDakQsSUFBSSxjQUFjLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNwRCxJQUFJLFFBQVEsR0FBRyxrQkFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQUMsR0FBUTtRQUMvRCxJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBUlMsUUFBQSxjQUFjLGtCQVF2QjtBQUVGLHNDQUFzQztBQUMvQixJQUFJLFdBQVcsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2pELElBQUksUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtRQUNuQixJQUFJLEdBQUcsRUFBRTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFiUyxRQUFBLFdBQVcsZUFhcEIifQ==