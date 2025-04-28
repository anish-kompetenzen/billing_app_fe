import axios from "axios";

const baseURL = "http://localhost:8080/";

class Service {
    async loginCashier(cashierModel) {
        return await axios.get(baseURL + "cashier/l?cashierEmail=" + cashierModel.cashierEmail + "&cashierPassword=" + cashierModel.cashierPassword);
    }

    async registerCashier(cashierModel) {
        return await axios.post(baseURL + "cashier", cashierModel);
    }

    async editCashier(cashierModel) {
        return await axios.put(baseURL + "cashier", cashierModel);
    }

    async addProduct(pdt) {
        return await axios.post(baseURL + "product", pdt);
    }

    async viewProducts() {
        return await axios.get(baseURL + "product");
    }

    async increaseQuantity(id) {
        return await axios.put(baseURL + "product/inc/" + id);
    }

    async decreaseQuantity(id) {
        return await axios.put(baseURL + "product/dec/" + id);
    }
}

export default new Service();