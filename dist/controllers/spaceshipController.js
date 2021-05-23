"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSpaceship = exports.updateSpaceship = exports.spaceshipTravel = exports.removeSpaceship = exports.getSpaceship = exports.allSpaceship = void 0;
var spaceship_1 = __importDefault(require("../spaceship"));
// Returns all the spaceships in the database
var allSpaceship = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var spaceships, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, spaceship_1.default.find()];
            case 1:
                spaceships = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.send(error_1);
                return [2 /*return*/];
            case 3:
                res.send(spaceships);
                return [2 /*return*/];
        }
    });
}); };
exports.allSpaceship = allSpaceship;
// Returns a specific spaceship given a spaceship ID
var getSpaceship = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var spaceship, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, spaceship_1.default.findById(req.params.id)];
            case 1:
                spaceship = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.send(error_2);
                return [2 /*return*/];
            case 3:
                res.send(spaceship);
                return [2 /*return*/];
        }
    });
}); };
exports.getSpaceship = getSpaceship;
// Removes a spaceship given a spaceship ID
var removeSpaceship = function (req, res) {
    var spaceship = spaceship_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted Spaceship");
        }
    });
};
exports.removeSpaceship = removeSpaceship;
var spaceshipTravel = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var originalSpaceship, spaceship, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, spaceship_1.default.findById(req.params.id)];
            case 1:
                originalSpaceship = _a.sent();
                if (originalSpaceship == null || originalSpaceship.status !== "O") {
                    res.send("Spaceship not operational");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, spaceship_1.default.findByIdAndUpdate(req.params.id, req.body)];
            case 2:
                spaceship = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.send(error_3);
                return [2 /*return*/];
            case 4:
                res.send("Spaceship has successfully travelled");
                return [2 /*return*/];
        }
    });
}); };
exports.spaceshipTravel = spaceshipTravel;
// Updates a spaceships parameters given a spaceship ID
var updateSpaceship = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var spaceship;
    return __generator(this, function (_a) {
        console.log(req.body);
        spaceship = spaceship_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, spaceship) {
            if (err) {
                res.send(err);
            }
            else {
                res.send("Succesfully updated spaceship status!");
            }
        });
        return [2 /*return*/];
    });
}); };
exports.updateSpaceship = updateSpaceship;
// Adds a new spaceship to the database
var addSpaceship = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var spaceship;
    return __generator(this, function (_a) {
        spaceship = new spaceship_1.default(req.body);
        console.log(req.body);
        console.log(spaceship);
        spaceship.save(function (err) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                console.log(spaceship);
                res.send(spaceship);
            }
        });
        return [2 /*return*/];
    });
}); };
exports.addSpaceship = addSpaceship;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2VzaGlwQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3NwYWNlc2hpcENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMkRBQXFDO0FBRXJDLDZDQUE2QztBQUN0QyxJQUFJLFlBQVksR0FBRyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7Ozs7Z0JBRW5DLHFCQUFNLG1CQUFTLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dCQUFuQyxVQUFVLEdBQUcsU0FBc0I7Ozs7Z0JBRXZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBSyxDQUFDLENBQUM7Z0JBQ2hCLHNCQUFPOztnQkFFYixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7O0tBQ3RCLENBQUM7QUFSUyxRQUFBLFlBQVksZ0JBUXJCO0FBRUYsb0RBQW9EO0FBQzdDLElBQUksWUFBWSxHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7OztnQkFFcEMscUJBQU0sbUJBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBQTs7Z0JBQW5ELFNBQVMsR0FBRyxTQUF1Qzs7OztnQkFFdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFLLENBQUMsQ0FBQztnQkFDaEIsc0JBQU87O2dCQUVYLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7Ozs7S0FDdEIsQ0FBQztBQVJTLFFBQUEsWUFBWSxnQkFRckI7QUFFRiwyQ0FBMkM7QUFDcEMsSUFBSSxlQUFlLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNyRCxJQUFJLFNBQVMsR0FBRyxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQUMsR0FBUTtRQUNqRSxJ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