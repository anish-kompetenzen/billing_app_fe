import axios from "axios";

const baseURL = "http://localhost:8080/cashier";

class Service {
    async loginCashier(cashierModel) {
        return await axios.get(baseURL + "/l?cashierEmail=" + cashierModel.cashierEmail + "&cashierPassword=" + cashierModel.cashierPassword);
    }

    async registerCashier(cashierModel) {
        return await axios.post(baseURL, cashierModel);
    }

    async editCashier(cashierModel) {
        return await axios.put(baseURL, cashierModel);
    }
}

export default new Service();