import { Model } from 'sequelize-typescript';
export declare class BlockEntity extends Model {
    id: string;
    previous_hash: string;
    amount: number;
    type: 'creation' | 'destruction' | 'transfer';
    sender: any;
    receiver: any;
    wallet: any;
    hash: string;
    timestamp: Date;
    static beforeSave(target: any): void;
    toString(): string;
}
