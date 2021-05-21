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
        console.log("Connection to DB Successfull");
    }
});
var status;
(function (status) {
    status["DECOMMISSIONED"] = "D";
    status["MAINTENANCE"] = "M";
    status["OPERATIONAL"] = "O";
})(status || (status = {}));
;
exports.SpaceshipSchema = new mongoose_1.Schema({
    spaceshipName: { type: String, required: true },
    model: { type: String, required: true },
    status: { type: String, enum: status, required: true }
});
var Spaceships = mongoose_1.model("Spaceships", exports.SpaceshipSchema);
exports.default = Spaceships;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2VzaGlwcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNwYWNlc2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWtEO0FBRWxELElBQU0sR0FBRyxHQUFXLGlDQUFpQyxDQUFDO0FBRXRELGtCQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUTtJQUNwQixJQUFJLEdBQUcsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFCO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDN0M7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUssTUFJSjtBQUpELFdBQUssTUFBTTtJQUNQLDhCQUFvQixDQUFBO0lBQ3BCLDJCQUFpQixDQUFBO0lBQ2pCLDJCQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFKSSxNQUFNLEtBQU4sTUFBTSxRQUlWO0FBQUEsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUN4QyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDL0MsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3ZDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0NBQ3RELENBQUMsQ0FBQztBQUVILElBQU0sVUFBVSxHQUFHLGdCQUFLLENBQUMsWUFBWSxFQUFFLHVCQUFlLENBQUMsQ0FBQztBQUN4RCxrQkFBZSxVQUFVLENBQUMifQ==