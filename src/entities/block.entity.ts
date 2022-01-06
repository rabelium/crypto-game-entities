import {
  BeforeCreate,
  Column,
  CreatedAt,
  DataType,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import {v4 as UUIDV4} from 'uuid';
import { createHash } from 'crypto';

import { UserEntity } from './user.entity';
import { WalletEntity } from './wallet.entity';

@Table({
  modelName: 'block',
  updatedAt: false,
})
export class BlockEntity extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    unique: true,
    primaryKey: true,
  })
  id: string = UUIDV4();

  @Column({
    type: DataType.STRING,
  })
  previous_hash: string;

  @Column({
    type: DataType.FLOAT,
  })
  amount: number;

  @Column({
    type: DataType.STRING,
    values: ['creation', 'destruction', 'transfer'],
  })
  type: 'creation' | 'destruction' | 'transfer';

  @HasOne(() => UserEntity)
  sender: any;

  @HasOne(() => UserEntity)
  receiver: any;

  @HasOne(() => WalletEntity)
  wallet: any;

  @Column({
    type: DataType.STRING,
  })
  hash: string;

  @CreatedAt
  @Column({ type: DataType.DATE })
  timestamp: Date;

  @BeforeCreate
  static beforeSave(target: any) {
    if (!target.id) {
      target.id = UUIDV4();
    }
    const json = JSON.stringify(target);
    const hash = createHash('SHA256');
    hash.update(json).end();
    target.hash = hash.digest('hex');
  }

  toString() {
    return JSON.stringify(this);
  }
}
