"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockEntity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid_1 = require("uuid");
const crypto_1 = require("crypto");
const user_entity_1 = require("./user.entity");
const wallet_entity_1 = require("./wallet.entity");
let BlockEntity = class BlockEntity extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.id = (0, uuid_1.v4)();
    }
    static beforeSave(target) {
        if (!target.id) {
            target.id = (0, uuid_1.v4)();
        }
        const json = JSON.stringify(target);
        const hash = (0, crypto_1.createHash)('SHA256');
        hash.update(json).end();
        target.hash = hash.digest('hex');
    }
    toString() {
        return JSON.stringify(this);
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        unique: true,
        primaryKey: true,
    })
], BlockEntity.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    })
], BlockEntity.prototype, "previous_hash", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
    })
], BlockEntity.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        values: ['creation', 'destruction', 'transfer'],
    })
], BlockEntity.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => user_entity_1.UserEntity)
], BlockEntity.prototype, "sender", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => user_entity_1.UserEntity)
], BlockEntity.prototype, "receiver", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => wallet_entity_1.WalletEntity)
], BlockEntity.prototype, "wallet", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    })
], BlockEntity.prototype, "hash", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE })
], BlockEntity.prototype, "timestamp", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate
], BlockEntity, "beforeSave", null);
BlockEntity = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'block',
        updatedAt: false,
    })
], BlockEntity);
exports.BlockEntity = BlockEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VudGl0aWVzL2Jsb2NrLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwrREFROEI7QUFDOUIsK0JBQWtDO0FBQ2xDLG1DQUFvQztBQUVwQywrQ0FBMkM7QUFDM0MsbURBQStDO0FBTS9DLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSw0QkFBSztJQUF0Qzs7UUFPRSxPQUFFLEdBQVcsSUFBQSxTQUFNLEdBQUUsQ0FBQztJQWtEeEIsQ0FBQztJQWJDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBVztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNkLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBQSxTQUFNLEdBQUUsQ0FBQztTQUN0QjtRQUNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsTUFBTSxJQUFJLEdBQUcsSUFBQSxtQkFBVSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBbERDO0lBTkMsSUFBQSw2QkFBTSxFQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsSUFBSTtRQUNuQixZQUFZLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO1FBQzdCLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLElBQUk7S0FDakIsQ0FBQzt1Q0FDb0I7QUFLdEI7SUFIQyxJQUFBLDZCQUFNLEVBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO0tBQ3RCLENBQUM7a0RBQ29CO0FBS3RCO0lBSEMsSUFBQSw2QkFBTSxFQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsS0FBSztLQUNyQixDQUFDOzJDQUNhO0FBTWY7SUFKQyxJQUFBLDZCQUFNLEVBQUM7UUFDTixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO1FBQ3JCLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDO0tBQ2hELENBQUM7eUNBQzRDO0FBRzlDO0lBREMsSUFBQSw2QkFBTSxFQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFVLENBQUM7MkNBQ2I7QUFHWjtJQURDLElBQUEsNkJBQU0sRUFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBVSxDQUFDOzZDQUNYO0FBR2Q7SUFEQyxJQUFBLDZCQUFNLEVBQUMsR0FBRyxFQUFFLENBQUMsNEJBQVksQ0FBQzsyQ0FDZjtBQUtaO0lBSEMsSUFBQSw2QkFBTSxFQUFDO1FBQ04sSUFBSSxFQUFFLCtCQUFRLENBQUMsTUFBTTtLQUN0QixDQUFDO3lDQUNXO0FBSWI7SUFGQyxnQ0FBUztJQUNULElBQUEsNkJBQU0sRUFBQyxFQUFFLElBQUksRUFBRSwrQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDOzhDQUNoQjtBQUdoQjtJQURDLG1DQUFZO21DQVNaO0FBcERVLFdBQVc7SUFKdkIsSUFBQSw0QkFBSyxFQUFDO1FBQ0wsU0FBUyxFQUFFLE9BQU87UUFDbEIsU0FBUyxFQUFFLEtBQUs7S0FDakIsQ0FBQztHQUNXLFdBQVcsQ0F5RHZCO0FBekRZLGtDQUFXIn0=