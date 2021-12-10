/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.33.956 on 2021-12-07 22:15:12.

import { Observable } from "rxjs";

export class MountPath {
    mountId: string;
    parentPath: string;
    name: string;
    type: PathType;
}

export interface HttpClient {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; }): RestResponse<R>;
}

export class RestApplicationClient {

    constructor(protected httpClient: HttpClient) {
    }

    /**
     * HTTP POST /mount-path/list
     * Java method: fr.fragnier.drawio.webapi.MountPathController.list
     */
    list(arg0: MountPath): RestResponse<MountPath[]> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`mount-path/list`, data: arg0 });
    }

    /**
     * HTTP GET /mount-path/root-content
     * Java method: fr.fragnier.drawio.webapi.MountPathController.rootContent
     */
    rootContent(): RestResponse<MountPath[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`mount-path/root-content` });
    }
}

export type RestResponse<R> = Observable<R>;

export enum PathType {
    DIRECTORY = "DIRECTORY",
    FILE = "FILE",
}

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}
