"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MiddeskModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddeskModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const webhook_1 = require("./webhook");
const business_1 = require("./business");
const company_1 = require("./company");
const tax_1 = require("./tax");
const subscription_1 = require("./subscription");
const constants_1 = require("./constants");
let MiddeskModule = exports.MiddeskModule = MiddeskModule_1 = class MiddeskModule {
    static register(api_key, environment) {
        return {
            module: MiddeskModule_1,
            imports: [
                axios_1.HttpModule.registerAsync({
                    useFactory: () => {
                        return {
                            baseURL: environment === "Production "
                                ? constants_1.BASE_PRODUCTION_URL
                                : constants_1.BASE_SANDBOX_URL,
                            headers: {
                                Authorization: `Bearer ${api_key}`,
                                "Content-Type": "application/json",
                            },
                        };
                    },
                }),
            ],
            providers: [
                webhook_1.WebhooksManager,
                business_1.BusinessManger,
                subscription_1.SubscriptionManager,
                company_1.CompanyManager,
                tax_1.TaxManager,
            ],
            exports: [
                webhook_1.WebhooksManager,
                business_1.BusinessManger,
                subscription_1.SubscriptionManager,
                company_1.CompanyManager,
                tax_1.TaxManager,
            ],
        };
    }
};
exports.MiddeskModule = MiddeskModule = MiddeskModule_1 = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Global)()
], MiddeskModule);
//# sourceMappingURL=middesk.module.js.map