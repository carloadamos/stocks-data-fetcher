import axios from "axios";

class StockController {
  private _baseAPI = "https://pselookup.vrymel.com/api";

  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  }

  async downloadData() {
    const result = await axios
      .get(`${this._baseAPI}/stocks`)
      .then((response) => {
        const {
          data: { stocks },
        } = response;

        return stocks;
      })
      .catch((error) => {
        console.log(error);
        return {
          error,
        };
      });

    return result;
  }
}

export = new StockController();
