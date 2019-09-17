import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Project } from '../models/project-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationProjectService {

  private ROUTE_API = environment.UrlApi;
  private ROUTE_CONTROLLER = 'api/Project';

  constructor(private http: HttpClient) { }

  getProject() {
    return this.http.get(`${this.ROUTE_API}/${this.ROUTE_CONTROLLER}`)
      .pipe(map((result: any) => {
        return result.value;
      }));
  }

  create(obj: Project) {
    return this.http.post(`${this.ROUTE_API}/${this.ROUTE_CONTROLLER}`, obj)
      .pipe(map((result: any) => {
        return result;
      }));
  }
}
