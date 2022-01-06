import {
  BeforeCreate,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { v4 as UUIDV4 } from 'uuid';
import { generateKeyPairSync } from 'crypto';

import { UserEntity } from './user.entity';

@Table({
  modelName: 'wallet',
  updatedAt: false,
})
export class WalletEntity extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    unique: true,
    primaryKey: true,
  })
  id: string = UUIDV4();

  @ForeignKey(() => UserEntity)
  @Column({ type: DataType.UUID })
  handler_id: number;

  @BelongsTo(() => UserEntity, 'handler_id')
  handler: any;

  @ForeignKey(() => UserEntity)
  @Column({ type: DataType.UUID })
  owner_id: number;

  @BelongsTo(() => UserEntity, 'owner_id')
  owner: any;

  @Column({ type: DataType.TEXT })
  private: string;

  @Column({ type: DataType.TEXT })
  public: string;

  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;

  @BeforeCreate
  static beforeSave(target: any) {
    if (!target.id) {
      target.id = UUIDV4();
    }
    const keys = generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: { type: 'spki', format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });
    target.private = keys.privateKey;
    target.public = keys.publicKey;
  }
}
