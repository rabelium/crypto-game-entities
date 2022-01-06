import { Model } from 'sequelize-typescript';
import { Roles } from '../enums/roles.enum';
import { WalletEntity } from '..';
export declare class UserEntity extends Model {
    id: string;
    display_name: string;
    username: string;
    password: string;
    salt: string;
    enabled: boolean;
    roles: Roles[];
    reset: boolean;
    wallets: WalletEntity[];
    created_at: Date;
    updated_at: Date;
    static encrypt(target: any): void;
    check(plainPassword: string): boolean;
}
