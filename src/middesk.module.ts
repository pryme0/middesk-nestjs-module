import { Injectable, DynamicModule, Global } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { WebhooksManager } from "./webhook";
import { BusinessManger } from "./business";
import { CompanyManager } from "./company";
import { TaxManager } from "./tax";
import { SubscriptionManager } from "./subscription";
import {
  BASE_SANDBOX_URL,
  BASE_PRODUCTION_URL,
  EnvironmentType,
} from "./constants";

@Injectable()
@Global()
export class MiddeskModule {
  static register(
    api_key: string,
    environment: EnvironmentType
  ): DynamicModule {
    return {
      module: MiddeskModule,
      imports: [
        HttpModule.registerAsync({
          useFactory: () => {
            return {
              baseURL:
                environment === "Production "
                  ? BASE_PRODUCTION_URL
                  : BASE_SANDBOX_URL,
              headers: {
                Authorization: `Bearer ${api_key}`,
                "Content-Type": "application/json",
              },
            };
          },
        }),
      ],
      providers: [
        WebhooksManager,
        BusinessManger,
        SubscriptionManager,
        CompanyManager,
        TaxManager,
      ],
      exports: [
        WebhooksManager,
        BusinessManger,
        SubscriptionManager,
        CompanyManager,
        TaxManager,
      ],
    };
  }
}
