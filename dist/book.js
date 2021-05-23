"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
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
exports.BookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});
var Book = mongoose_1.model("Book", exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWtEO0FBRWxELElBQU0sR0FBRyxHQUFXLGlDQUFpQyxDQUFDO0FBRXRELGtCQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUTtJQUNwQixJQUFJLEdBQUcsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFCO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsVUFBVSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUNuQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdkMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQ3pDLENBQUMsQ0FBQztBQUVILElBQU0sSUFBSSxHQUFHLGdCQUFLLENBQUMsTUFBTSxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUN2QyxrQkFBZSxJQUFJLENBQUMifQ==