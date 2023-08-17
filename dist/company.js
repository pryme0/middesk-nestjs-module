"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyManager = void 0;
const rxjs_1 = require("rxjs");
class CompanyManager {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createCompany(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`/agent/companies`, payload));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async retrieveCompany(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/agent/companies/${payload.id}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async updateCompany(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`/agent/companies/${payload.id}`, payload.data));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async listAllCompanies() {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/agent/companies/`));
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
exports.CompanyManager = CompanyManager;
//# sourceMappingURL=company.js.map