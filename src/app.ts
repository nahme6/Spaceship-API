import express, { Request, Response } from "express";

import * as spaceshipController from "./controllers/spaceshipController";
import * as locationController from "./controllers/locationController";

// Our Express APP config
const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req: Request, res: Response) => res.send("hi"))

// API Endpoints for Spaceship
app.get("/spaceship", spaceshipController.allSpaceship);
app.get("/spaceship/:id", spaceshipController.getSpaceship);
app.post("/spaceship", spaceshipController.addSpaceship);
app.put("/spaceship/:id", spaceshipController.spaceshipTravel);
app.delete("/spaceship/:id", spaceshipController.removeSpaceship);

// API Endpoints for Location
app.get("/location", locationController.allLocations);
app.get("/location/:id", locationController.getLocation);
app.post("/location", locationController.addLocation);
app.delete("/location/:id", locationController.removeLocation);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});