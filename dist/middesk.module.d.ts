import { DynamicModule } from "@nestjs/common";
import { EnvironmentType } from "./constants";
export declare class MiddeskModule {
    static register(api_key: string, environment: EnvironmentType): DynamicModule;
}
