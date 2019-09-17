import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkItemService {

  private ROUTE_API = environment.UrlApi;
  private ROUTE_CONTROLLER = 'api/WorkItem';

  constructor(private http: HttpClient) { }

  getWorkItens(type: string) {

    const params = new HttpParams().set('type', type);

    return this.http.get(`${this.ROUTE_API}/${this.ROUTE_CONTROLLER}`, {params})
      .pipe(map((result: any) => {
        return result.value;
      }));
  }
}
