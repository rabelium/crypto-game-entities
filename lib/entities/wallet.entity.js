"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid_1 = require("uuid");
const crypto_1 = require("crypto");
const user_entity_1 = require("./user.entity");
let WalletEntity = class WalletEntity extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.id = (0, uuid_1.v4)();
    }
    static beforeSave(target) {
        if (!target.id) {
            target.id = (0, uuid_1.v4)();
        }
        const keys = (0, crypto_1.generateKeyPairSync)('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: { type: 'spki', format: 'pem' },
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
        });
        target.private = keys.privateKey;
        target.public = keys.publicKey;
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        unique: true,
        primaryKey: true,
    })
], WalletEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID })
], WalletEntity.prototype, "handler_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.UserEntity, 'handler_id')
], WalletEntity.prototype, "handler", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.UserEntity),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.UUID })
], WalletEntity.prototype, "owner_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.UserEntity, 'owner_id')
], WalletEntity.prototype, "owner", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT })
], WalletEntity.prototype, "private", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT })
], WalletEntity.prototype, "public", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE })
], WalletEntity.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate
], WalletEntity, "beforeSave", null);
WalletEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'wallet',
        updatedAt: false,
    })
], WalletEntity);
exports.WalletEntity = WalletEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy93YWxsZXQuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtEQVM4QjtBQUM5QiwrQkFBb0M7QUFDcEMsbUNBQTZDO0FBRTdDLCtDQUEyQztBQU0zQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFhLFNBQVEsNEJBQUs7SUFBdkM7O1FBT0UsT0FBRSxHQUFXLElBQUEsU0FBTSxHQUFFLENBQUM7SUF1Q3hCLENBQUM7SUFaQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQVc7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDZCxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUEsU0FBTSxHQUFFLENBQUM7U0FDdEI7UUFDRCxNQUFNLElBQUksR0FBRyxJQUFBLDRCQUFtQixFQUFDLEtBQUssRUFBRTtZQUN0QyxhQUFhLEVBQUUsSUFBSTtZQUNuQixpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNsRCxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtTQUNyRCxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2pDLENBQUM7Q0FDRixDQUFBO0FBdkNDO0lBTkMsSUFBQSw2QkFBTSxFQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsSUFBSTtRQUNuQixZQUFZLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO1FBQzdCLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLElBQUk7S0FDakIsQ0FBQzt3Q0FDb0I7QUFJdEI7SUFGQyxJQUFBLGlDQUFVLEVBQUMsR0FBRyxFQUFFLENBQUMsd0JBQVUsQ0FBQztJQUM1QixJQUFBLDZCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsK0JBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnREFDYjtBQUduQjtJQURDLElBQUEsZ0NBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBVSxFQUFFLFlBQVksQ0FBQzs2Q0FDN0I7QUFJYjtJQUZDLElBQUEsaUNBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO0lBQzVCLElBQUEsNkJBQU0sRUFBQyxFQUFFLElBQUksRUFBRSwrQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDOzhDQUNmO0FBR2pCO0lBREMsSUFBQSxnQ0FBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFVLEVBQUUsVUFBVSxDQUFDOzJDQUM3QjtBQUdYO0lBREMsSUFBQSw2QkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLCtCQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7NkNBQ2hCO0FBR2hCO0lBREMsSUFBQSw2QkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLCtCQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7NENBQ2pCO0FBSWY7SUFGQyxnQ0FBUztJQUNULElBQUEsNkJBQU0sRUFBQyxFQUFFLElBQUksRUFBRSwrQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dEQUNmO0FBR2pCO0lBREMsbUNBQVk7b0NBWVo7QUE3Q1UsWUFBWTtJQUp4QixJQUFBLDRCQUFLLEVBQUM7UUFDTCxTQUFTLEVBQUUsUUFBUTtRQUNuQixTQUFTLEVBQUUsS0FBSztLQUNqQixDQUFDO0dBQ1csWUFBWSxDQThDeEI7QUE5Q1ksb0NBQVkifQ==