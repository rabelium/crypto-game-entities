import { Model } from 'sequelize-typescript';
export declare class WalletEntity extends Model {
    id: string;
    handler_id: number;
    handler: any;
    owner_id: number;
    owner: any;
    private: string;
    public: string;
    created_at: Date;
    static beforeSave(target: any): void;
}
