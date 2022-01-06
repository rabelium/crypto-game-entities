import {
  DataType,
  Column,
  Model,
  Table,
  BeforeCreate,
  CreatedAt,
  UpdatedAt,
  BeforeUpdate,
  HasMany,
} from 'sequelize-typescript';
import { v4 as UUIDV4 } from 'uuid';
import { pbkdf2Sync, randomBytes } from 'crypto';

import { Roles } from '../enums/roles.enum';
import { WalletEntity } from '..';

@Table({
  modelName: 'user',
})
export class UserEntity extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  id: string = UUIDV4();

  @Column({ type: DataType.STRING })
  display_name: string;

  @Column({ type: DataType.STRING })
  username: string;

  @Column({ type: DataType.STRING })
  password: string;

  @Column({ type: DataType.STRING })
  salt: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  enabled: boolean = true;

  @Column({ type: DataType.ARRAY(DataType.TEXT) })
  roles: Roles[];

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  reset: boolean = false;

  @HasMany(() => WalletEntity, 'owner_id')
  wallets: WalletEntity[];

  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  updated_at: Date;

  @BeforeCreate
  @BeforeUpdate
  static encrypt(target: any) {
    if (!target.salt) {
      target.salt = randomBytes(16).toString('hex');
    }

    if (!target.id) {
      target.id = UUIDV4();
    }

    if (target.changed('password')) {
      target.password = pbkdf2Sync(
        target.password,
        target.salt,
        1000,
        64,
        `sha512`
      ).toString(`hex`);
    }
  }

  public check(plainPassword: string): boolean {
    return (
      this.password ===
      pbkdf2Sync(plainPassword, this.salt, 1000, 64, `sha512`).toString(`hex`)
    );
  }
}
