// controllers/bookController.ts
import { Request, Response } from "express";
import Spaceships from "./../spaceships";


// GET all Spaceships fron DB
export let allSpaceshps = (req: Request, res: Response) => {
  let spaceships = Spaceships.find((err: any, books: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(books);
    }
  });
};