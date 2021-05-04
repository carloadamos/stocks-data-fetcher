import { NextFunction, Request, Response, Router } from "express";
import StockController from "../../controllers/StockController";

class StockRouter {
  private _router = Router();
  private _controller = StockController;
  private _currentDate = this._getDate();

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod());
    });

    this._router.get(
      "/download",
      async (req: Request, res: Response, next: NextFunction) => {
        const result = await this._controller.downloadData();
        res.status(200).json({ stocks: result });
      }
    );
  }

  private _getDate() {
    const _currentDate = new Date();

    return _currentDate.toISOString().split("T")[0];
  }
}

export = new StockRouter().router;
