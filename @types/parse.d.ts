import { Account, RawAccount, RawOrder, Order, RawPosition, Position, RawTradeActivity, TradeActivity, RawNonTradeActivity, NonTradeActivity, RawActivity, Activity, RawClock, Clock } from './entities.js';
declare function account(rawAccount: RawAccount): Account;
declare function clock(rawClock: RawClock): Clock;
declare function order(rawOrder: RawOrder): Order;
declare function orders(rawOrders: RawOrder[]): Order[];
declare function position(rawPosition: RawPosition): Position;
declare function positions(rawPositions: RawPosition[]): Position[];
declare function tradeActivity(rawTradeActivity: RawTradeActivity): TradeActivity;
declare function nonTradeActivity(rawNonTradeActivity: RawNonTradeActivity): NonTradeActivity;
declare function activities(rawActivities: Array<RawActivity>): Array<Activity>;
declare const _default: {
    account: typeof account;
    activities: typeof activities;
    clock: typeof clock;
    nonTradeActivity: typeof nonTradeActivity;
    order: typeof order;
    orders: typeof orders;
    position: typeof position;
    positions: typeof positions;
    tradeActivity: typeof tradeActivity;
};
export default _default;
