import { Router } from "express";
import StockRouter from "./StockRouter/StockRouter";

class MasterRouter {
  private _router = Router();
  private _stockRouter = StockRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use("/stock", this._stockRouter);
  }
}

export = new MasterRouter().router;
