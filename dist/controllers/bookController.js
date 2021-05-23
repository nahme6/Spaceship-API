"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = exports.updateBook = exports.deleteBook = exports.getBook = exports.allBooks = void 0;
var spaceship_1 = __importDefault(require("../spaceship"));
// We'll start with allBooks which will return
// every we have from our database
var allBooks = function (req, res) {
    var books = spaceship_1.default.find(function (err, books) {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(books);
        }
    });
};
exports.allBooks = allBooks;
var getBook = function (req, res) {
    var book = spaceship_1.default.findById(req.params.id, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.getBook = getBook;
var deleteBook = function (req, res) {
    var book = spaceship_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted Book");
        }
    });
};
exports.deleteBook = deleteBook;
var updateBook = function (req, res) {
    console.log(req.body);
    var book = spaceship_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated book!");
        }
    });
};
exports.updateBook = updateBook;
var addBook = function (req, res) {
    var book = new spaceship_1.default(req.body);
    console.log(req.body);
    console.log(book);
    book.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(book);
            res.send(book);
        }
    });
};
exports.addBook = addBook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9ib29rQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSwyREFBZ0M7QUFFaEMsOENBQThDO0FBQzlDLGtDQUFrQztBQUMzQixJQUFJLFFBQVEsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2hELElBQUksS0FBSyxHQUFHLG1CQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUSxFQUFFLEtBQVU7UUFDekMsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFSUyxRQUFBLFFBQVEsWUFRakI7QUFFSyxJQUFJLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzdDLElBQUksSUFBSSxHQUFHLG1CQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUSxFQUFFLElBQVM7UUFDeEQsSUFBSSxHQUFHLEVBQUU7WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFSUyxRQUFBLE9BQU8sV0FRaEI7QUFFSyxJQUFJLFVBQVUsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2hELElBQUksSUFBSSxHQUFHLG1CQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBQyxHQUFRO1FBQ3ZELElBQUksR0FBRyxFQUFFO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFSUyxRQUFBLFVBQVUsY0FRbkI7QUFFSyxJQUFJLFVBQVUsR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLElBQUksSUFBSSxHQUFHLG1CQUFJLENBQUMsaUJBQWlCLENBQzdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUNiLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsVUFBQyxHQUFRLEVBQUUsSUFBUztRQUNoQixJQUFJLEdBQUcsRUFBRTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUMsQ0FDSixDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBYlMsUUFBQSxVQUFVLGNBYW5CO0FBRUssSUFBSSxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUM3QyxJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7UUFDZixJQUFJLEdBQUcsRUFBRTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFiUyxRQUFBLE9BQU8sV0FhaEIifQ==