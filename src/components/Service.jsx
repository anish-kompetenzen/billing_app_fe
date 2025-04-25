import axios from "axios";

class Service {
    async loginCashier(cashierModel) {
        await axios.get("http://localhost:8080/cashier/l?cashierEmail=" + cashierModel.cashierEmail + "&cashierPassword=" + cashierModel.cashierPassword);
    }
}

export default new Service();