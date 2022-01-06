"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid_1 = require("uuid");
const crypto_1 = require("crypto");
const __1 = require("..");
let UserEntity = class UserEntity extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.id = (0, uuid_1.v4)();
        this.enabled = true;
        this.reset = false;
    }
    static encrypt(target) {
        if (!target.salt) {
            target.salt = (0, crypto_1.randomBytes)(16).toString('hex');
        }
        if (!target.id) {
            target.id = (0, uuid_1.v4)();
        }
        if (target.changed('password')) {
            target.password = (0, crypto_1.pbkdf2Sync)(target.password, target.salt, 1000, 64, `sha512`).toString(`hex`);
        }
    }
    check(plainPassword) {
        return (this.password ===
            (0, crypto_1.pbkdf2Sync)(plainPassword, this.salt, 1000, 64, `sha512`).toString(`hex`));
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
    })
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })
], UserEntity.prototype, "display_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })
], UserEntity.prototype, "salt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: true })
], UserEntity.prototype, "enabled", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.TEXT) })
], UserEntity.prototype, "roles", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false })
], UserEntity.prototype, "reset", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => __1.WalletEntity, 'owner_id')
], UserEntity.prototype, "wallets", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE })
], UserEntity.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE })
], UserEntity.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    sequelize_typescript_1.BeforeUpdate
], UserEntity, "encrypt", null);
UserEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'user',
    })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW50aXRpZXMvdXNlci5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0RBVThCO0FBQzlCLCtCQUFvQztBQUNwQyxtQ0FBaUQ7QUFHakQsMEJBQWtDO0FBS2xDLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVcsU0FBUSw0QkFBSztJQUFyQzs7UUFPRSxPQUFFLEdBQVcsSUFBQSxTQUFNLEdBQUUsQ0FBQztRQWV0QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBTXhCLFVBQUssR0FBWSxLQUFLLENBQUM7SUF5Q3pCLENBQUM7SUExQkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFXO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBQSxvQkFBVyxFQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ2QsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFBLFNBQU0sR0FBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzlCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBQSxtQkFBVSxFQUMxQixNQUFNLENBQUMsUUFBUSxFQUNmLE1BQU0sQ0FBQyxJQUFJLEVBQ1gsSUFBSSxFQUNKLEVBQUUsRUFDRixRQUFRLENBQ1QsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLGFBQXFCO1FBQ2hDLE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUTtZQUNiLElBQUEsbUJBQVUsRUFBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FDekUsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBOURDO0lBTkMsSUFBQSw2QkFBTSxFQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsSUFBSTtRQUNuQixVQUFVLEVBQUUsSUFBSTtRQUNoQixTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7c0NBQ29CO0FBR3RCO0lBREMsSUFBQSw2QkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLCtCQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7Z0RBQ2I7QUFHckI7SUFEQyxJQUFBLDZCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0Q0FDakI7QUFHakI7SUFEQyxJQUFBLDZCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0Q0FDakI7QUFHakI7SUFEQyxJQUFBLDZCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3Q0FDckI7QUFHYjtJQURDLElBQUEsNkJBQU0sRUFBQyxFQUFFLElBQUksRUFBRSwrQkFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7MkNBQy9CO0FBR3hCO0lBREMsSUFBQSw2QkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLCtCQUFRLENBQUMsS0FBSyxDQUFDLCtCQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt5Q0FDakM7QUFHZjtJQURDLElBQUEsNkJBQU0sRUFBQyxFQUFFLElBQUksRUFBRSwrQkFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7eUNBQ2pDO0FBR3ZCO0lBREMsSUFBQSw4QkFBTyxFQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFZLEVBQUUsVUFBVSxDQUFDOzJDQUNoQjtBQUl4QjtJQUZDLGdDQUFTO0lBQ1QsSUFBQSw2QkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLCtCQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7OENBQ2Y7QUFJakI7SUFGQyxnQ0FBUztJQUNULElBQUEsNkJBQU0sRUFBQyxFQUFFLElBQUksRUFBRSwrQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDOzhDQUNmO0FBSWpCO0lBRkMsbUNBQVk7SUFDWixtQ0FBWTsrQkFtQlo7QUE3RFUsVUFBVTtJQUh0QixJQUFBLDRCQUFLLEVBQUM7UUFDTCxTQUFTLEVBQUUsTUFBTTtLQUNsQixDQUFDO0dBQ1csVUFBVSxDQXFFdEI7QUFyRVksZ0NBQVUifQ==