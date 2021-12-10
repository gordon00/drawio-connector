import {Injectable} from '@angular/core';
import {HttpClient, RestApplicationClient} from '../../generated/client-api';
import {HttpClient as NgHttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

class AngularHttpClientWrapper implements HttpClient {

  constructor(private httpClient: NgHttpClient) {
  }

  request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R }): Observable<R> {
    const url = environment.apiUrl ? environment.apiUrl + requestConfig.url : requestConfig.url;

    return this.httpClient.request(
      requestConfig.method,
      url,
      {
        body: requestConfig.data,
        params: requestConfig.queryParams
      }
    ) as Observable<R>;
  }
}

@Injectable({providedIn: 'root'})
export class ApiService extends RestApplicationClient {

  constructor(httpClient: NgHttpClient) {
    super(new AngularHttpClientWrapper(httpClient));
  }
}

