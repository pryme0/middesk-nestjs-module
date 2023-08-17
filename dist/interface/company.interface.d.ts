export type MiddeskCompanyEntityType = 'llc' | 'corporation';
export type MiddeskCompanyAddressType = 'primary' | 'mailing' | 'remote';
export interface MiddeskCompanyAddressInterface {
    full_address?: string;
    address_line1?: string;
    address_line2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    address_type?: MiddeskCompanyAddressType[];
    type?: string;
}
export interface MiddeskCompanyIndividualInterface {
    name?: string;
    titles?: string[];
    signatory?: boolean;
    ownership_percentage?: number;
    ssn?: string;
    dob?: string;
    address_type?: MiddeskCompanyAddressType;
}
export interface MiddeskCompanyInterface {
    legal_name?: string;
    dba_name?: string;
    ein?: string;
    entity_type: MiddeskCompanyEntityType;
    formation_state: string;
    formation_date?: string;
    industry?: string;
    naics_code?: string;
    purpose?: string;
    contact_name?: string;
    contact_email?: string;
    contact_phone_number?: string;
    acquired?: boolean;
    fiscal_year_end?: string;
    legal_entity_changed?: string;
    addresses?: string;
    individual?: MiddeskCompanyIndividualInterface;
}
export interface RetrieveMiddeskCompanyInterface {
    id: string;
}
export interface UpdateMiddeskCompanyInterface {
    id: string;
    data: MiddeskCompanyInterface;
}
