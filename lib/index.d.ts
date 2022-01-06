export * from './entities/block.entity';
export * from './entities/user.entity';
export * from './entities/wallet.entity';
import { BlockEntity } from './entities/block.entity';
import { UserEntity } from './entities/user.entity';
import { WalletEntity } from './entities/wallet.entity';
export declare const entities: (typeof UserEntity | typeof WalletEntity | typeof BlockEntity)[];
export * from './enums/roles.enum';
