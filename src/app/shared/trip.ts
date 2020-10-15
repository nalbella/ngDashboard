import { Account } from './account';

export interface Trip {
    id: number;
    account: Account;
    quote: number;
    RTA: Date;
    creationDate: Date;

}