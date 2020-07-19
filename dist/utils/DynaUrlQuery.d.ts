import { EventEmitter } from 'eventemitter3';
export interface IDynaURLQuerySettings {
    defaultQuery?: any;
}
export interface IUrlQuery {
    data: any;
    asString: string;
}
export declare class DynaURLQuery extends EventEmitter {
    static events: any;
    constructor(settings?: IDynaURLQuerySettings);
    private _settings;
    getQuery(partialQuery?: any, includeUrlsQuery?: boolean): IUrlQuery;
    private get _urlQuery();
}
