"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionManager = void 0;
const rxjs_1 = require("rxjs");
class SubscriptionManager {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createSubscription(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`/businesses`, payload));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async retrieveSubscription(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/businesses/${payload.id}/subscription`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async updateSubscription(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.patch(`/businesses/${payload.id}/subscription`, payload.data));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async deleteSubscription(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.delete(`/businesses/${payload.id}/subscription`));
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
exports.SubscriptionManager = SubscriptionManager;
//# sourceMappingURL=subscription.js.map