// controllers/locationController.ts
import { Request, Response } from "express";
import Location from "../location";

// Returns all locations in the database
export let allLocations = (req: Request, res: Response) => {
  let locations = Location.find((err: any, locations: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(locations);
    }
  });
};

// Returns a specific location given a location ID
export let getLocation = (req: Request, res: Response) => {
    let location = Location.findById(req.params.id, (err: any, location: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(location);
        }
    });
};

// Removes a location from the database give location ID
export let removeLocation = (req: Request, res: Response) => {
    let location = Location.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Succesfully Deleted Location");
        }
    });
};

// Adds a new location to the database
export let addLocation = (req: Request, res: Response) => {
    var location = new Location(req.body);
    console.log(req.body);
    console.log(location);
    location.save((err: any) => {
        if (err) {
            console.log(err)
            res.send(err);
        } else {
            console.log(location);
            res.send(location);
        }
    });
};