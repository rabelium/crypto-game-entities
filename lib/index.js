"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entities = void 0;
__exportStar(require("./entities/block.entity"), exports);
__exportStar(require("./entities/user.entity"), exports);
__exportStar(require("./entities/wallet.entity"), exports);
const block_entity_1 = require("./entities/block.entity");
const user_entity_1 = require("./entities/user.entity");
const wallet_entity_1 = require("./entities/wallet.entity");
exports.entities = [user_entity_1.UserEntity, wallet_entity_1.WalletEntity, block_entity_1.BlockEntity];
__exportStar(require("./enums/roles.enum"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUF3QztBQUN4Qyx5REFBdUM7QUFDdkMsMkRBQXlDO0FBRXpDLDBEQUFzRDtBQUN0RCx3REFBb0Q7QUFDcEQsNERBQXdEO0FBRTNDLFFBQUEsUUFBUSxHQUFHLENBQUMsd0JBQVUsRUFBRSw0QkFBWSxFQUFFLDBCQUFXLENBQUMsQ0FBQztBQUVoRSxxREFBbUMifQ==