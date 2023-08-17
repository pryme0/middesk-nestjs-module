"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksManager = void 0;
const rxjs_1 = require("rxjs");
class WebhooksManager {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createWebhook(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`/webhooks`, payload));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async retrieveWebhook(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/webhooks/${payload.id}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async updateWebhook(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.patch(`/webhooks/${payload.id}`, payload.data));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async listWebhook(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/webhooks?oauth_client_id=${payload.oauth_client_id}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async deleteWebhook(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.delete(`/webhooks/${payload.id}`));
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
exports.WebhooksManager = WebhooksManager;
//# sourceMappingURL=webhook.js.map