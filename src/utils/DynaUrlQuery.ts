import * as qs from 'qs';
import {EventEmitter} from 'eventemitter3'

export interface IDynaURLQuerySettings {
  defaultQuery?: any;
}

export interface IUrlQuery {
  data: any;
  asString: string;
}

export class DynaURLQuery extends EventEmitter {
  static events: any = {
    PARSE_ERROR: 'parse_error'
  };

  constructor(settings: IDynaURLQuerySettings = {}) {
    super();
    this._settings = settings;
  }

  private _settings: IDynaURLQuerySettings;

  public getQuery(partialQuery: any = {}, includeUrlsQuery: boolean = true): IUrlQuery {
    // merge objects
    let query: any = {
      ...(includeUrlsQuery ? this._urlQuery : {}),
      ...partialQuery,
    };

    // delete undefined
    for (let key in query)
      if (query[key] === undefined) delete query[key];

    return {
      data: query,
      asString: qs.stringify(query),
    };
  }

  private get _urlQuery(): any {
    try {
      return qs.parse(document.location.search.substr(1));
    } catch (error) {
      this.emit(DynaURLQuery.events.PARSE_ERROR, error);
      return this._settings.defaultQuery;
    }
  }

}
