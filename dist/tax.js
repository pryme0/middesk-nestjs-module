"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxManager = void 0;
const rxjs_1 = require("rxjs");
class TaxManager {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createRegistration(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`/partner/registration_requests`, payload));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async retrieveRegistrationRequest(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/partner/registration_requests/${payload.id}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async retrieveTaxRegistration(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/agent/tax_registration/${payload.id}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async retrieveTaxRegistrations(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/agent/tax_registration?company_id=${payload === null || payload === void 0 ? void 0 : payload.company_id}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
}
exports.TaxManager = TaxManager;
//# sourceMappingURL=tax.js.map