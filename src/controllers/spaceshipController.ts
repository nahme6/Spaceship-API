// controllers/spaceshipController.ts
import { Request, Response } from "express";
import Spaceship from "../spaceship";

// Returns all the spaceships in the database
export let allSpaceship = async (req: Request, res: Response) => {
    try {
        var spaceships = await Spaceship.find()
    } catch (error) {
        res.send(error);
        return;
    }
  res.send(spaceships);
};

// Returns a specific spaceship given a spaceship ID
export let getSpaceship = async (req: Request, res: Response) => {
    try {
        var spaceship = await Spaceship.findById(req.params.id)
    } catch (error) {
        res.send(error);
        return;
    }
    res.send(spaceship)
};

// Removes a spaceship given a spaceship ID
export let removeSpaceship = (req: Request, res: Response) => {
    let spaceship = Spaceship.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Succesfully Deleted Spaceship");
        }
    });
};

export let spaceshipTravel = async (req: Request, res: Response) => {
    try {
        var originalSpaceship:any = await Spaceship.findById(req.params.id)
        if (originalSpaceship == null || originalSpaceship.status !== "O"){
            res.send("Spaceship not operational")
            return;
        }
        var spaceship = await Spaceship.findByIdAndUpdate(req.params.id, req.body)
    } catch (error) {
        res.send(error);
        return;
    }
    res.send("Spaceship has successfully travelled")
};

// Updates a spaceships parameters given a spaceship ID
export let updateSpaceship = async (req: Request, res: Response) => {
    console.log(req.body);
    let spaceship = Spaceship.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, spaceship: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Succesfully updated spaceship status!");
            }
        }
    );
};

// Adds a new spaceship to the database
export let addSpaceship = async (req: Request, res: Response) => {
    var spaceship = new Spaceship(req.body);
    console.log(req.body);
    console.log(spaceship);
    spaceship.save((err: any) => {
        if (err) {
            console.log(err)
            res.send(err);
        } else {
            console.log(spaceship);
            res.send(spaceship);
        }
    });
};