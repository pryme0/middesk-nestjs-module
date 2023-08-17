
<p  align="center" >

<a  href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo-small.svg"  width="200"  alt="Nest Logo"  /></a>

<a  href="http://nestjs.com/"  target="blank"><img  src="https://d9hhrg4mnvzow.cloudfront.net/get.middesk.com/verification/c84ac59d-group-1000004533_103s00h000000000000000.png"  width="200"  alt="Nest Logo"  /></a>

</p>

## Description

[Mindesk](https://get.middesk.com//) is a leading business identity Sass platform that enables companies to peform KYB and KYC for businesses across the us.

You can view their Api [Documentation](https://docs.middesk.com/docs)  here, and api reference [here](https://docs.middesk.com/docs)

To use this package you will need to [create an account](https://www.middesk.com/signup) with Middesk  in order to get an Api key.

The package works with Nodejs v18 >

This package implements the endpoints for  

- Business
- Tax Registration
- Business Classification
- Web hooks
- Subscription
- Company
- Ip Whitelisting

## Installation

```bash

yarn  add @prymejo/middesk-nestjs-module

```

## Using the package

```bash
import { MiddeskModule,SubscriptionManager,CompanyManager,BusinessManger,TaxManager,WebhooksManager } from  '@prymejo/middesk-nestjs-module';

@Module({
imports: [MiddeskModule.register("Aapi_key","enviroment")],
controllers: [],
providers: [
SubscriptionManager,
CompanyManager
,BusinessManger,
TaxManager,
WebhooksManager],
})
export  class  AppModule {}

#Available service

 - SubscriptionManager
 - CompanyManager
 - BusinessManger
 - TaxManager
 - WebhooksManager

```

    export class KycService{  
    constructor(private  readonly  businessManagerService:  BusinessManger) {}
    
    async createBusiness (payload){
    return await this.businessManagerService.createBusiness(payload)
    }
    }

## Stay in touch

- Author - Joseph Obochi  - <obochi2@gmail.com>

- Twitter - [@prymejo](https://twitter.com/prymejo)

## License

@prymejo/middesk-nestjs-module is [MIT licensed](LICENSE).
