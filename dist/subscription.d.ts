import { HttpService } from '@nestjs/axios';
import { CreateSubscriptionInterface, CreateSubscriptionResponse, RetrieveSubscriptionInterface, UpdateSubscriptionInterface } from './interface';
export declare class SubscriptionManager {
    private readonly httpService;
    constructor(httpService: HttpService);
    createSubscription(payload: CreateSubscriptionInterface): Promise<CreateSubscriptionResponse>;
    retrieveSubscription(payload: RetrieveSubscriptionInterface): Promise<CreateSubscriptionResponse>;
    updateSubscription(payload: UpdateSubscriptionInterface): Promise<CreateSubscriptionResponse>;
    deleteSubscription(payload: RetrieveSubscriptionInterface): Promise<any>;
}
