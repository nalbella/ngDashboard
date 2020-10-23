import { Account } from './account';

export interface Trip {
    id: number;
    account: Account;
    quotedPrice: number;
    rta: Date;
    createdDate: Date;

}