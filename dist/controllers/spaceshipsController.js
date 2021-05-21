"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allSpaceshps = void 0;
var spaceships_1 = __importDefault(require("./../spaceships"));
// GET all Spaceships fron DB
var allSpaceshps = function (req, res) {
    var spaceships = spaceships_1.default.find(function (err, books) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(books);
        }
    });
};
exports.allSpaceshps = allSpaceshps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2VzaGlwc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9zcGFjZXNoaXBzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSwrREFBeUM7QUFHekMsNkJBQTZCO0FBQ3RCLElBQUksWUFBWSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDcEQsSUFBSSxVQUFVLEdBQUcsb0JBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRLEVBQUUsS0FBVTtRQUNwRCxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVJTLFFBQUEsWUFBWSxnQkFRckIifQ==