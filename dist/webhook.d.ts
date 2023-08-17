import { HttpService } from '@nestjs/axios';
import { CreateMiddeskWebhookInterface, CreateMiddeskWebhookResponseInterface, ListMiddeskWebhookInterface, RetrieveMiddeskWebhookInterface, UpdateMiddeskWebhookInterface } from './interface';
export declare class WebhooksManager {
    private readonly httpService;
    constructor(httpService: HttpService);
    createWebhook(payload: CreateMiddeskWebhookInterface): Promise<CreateMiddeskWebhookResponseInterface>;
    retrieveWebhook(payload: RetrieveMiddeskWebhookInterface): Promise<CreateMiddeskWebhookResponseInterface>;
    updateWebhook(payload: UpdateMiddeskWebhookInterface): Promise<CreateMiddeskWebhookResponseInterface>;
    listWebhook(payload: ListMiddeskWebhookInterface): Promise<CreateMiddeskWebhookResponseInterface[]>;
    deleteWebhook(payload: RetrieveMiddeskWebhookInterface): Promise<CreateMiddeskWebhookResponseInterface>;
}
