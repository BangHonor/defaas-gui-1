import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';


import { WrapRes, ServiceErrorHandler } from '../wrap'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


export interface Funccode {//Faaslevel API
  name: string,
  language: string,
}


@Injectable({
  providedIn: 'root'
})
export class FunccodeService extends ServiceErrorHandler {
  funccodes:Map<string,Funccode>;

constructor(
    private http: HttpClient,
    private message: NzMessageService,
  ) {

    super()
    this.loadFunccodeFromServe();
  }

  private loadFunccodeFromServe(): void {

    this.funccodes = new Map();

    let one: Funccode = {
      name: "funccode name",
      language: "funccode language"
    };
    this.funccodes.set(one.name, one);

    this.message.success('加载funccode数据成功');
  }

  getListOfFunccode(): Observable<Funccode[]> {
    return of([...this.funccodes.values()]);
  }
}
