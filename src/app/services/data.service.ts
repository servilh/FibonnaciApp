import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

export interface FibonnaciLog {
  id: number;
  createdOn: string;
  FibonnaciQuery: Array<number>; 
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  public logs: FibonnaciLog[] = [];

  private endpoint = 'https://fibonnaciserver.azurewebsites.net/fibonnaci';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"})
  }; 
  
  constructor(private httpClient: HttpClient) { }

  public getFibonnaciLogs(): Observable<FibonnaciLog[]>  {
    return this.httpClient.get<FibonnaciLog[]>(this.endpoint, this.httpOptions)
      .pipe(
        tap(logsCache => this.logs = logsCache),
        catchError(this.handleError<FibonnaciLog[]>('Get FibonnaciLog', []))
      );
  }

  public createFibonnaci(length: number): Observable<any> {
    return this.httpClient.post<FibonnaciLog[]>(this.endpoint+"/"+length, null, this.httpOptions)
      .pipe(
        tap(logsCache => this.logs = logsCache),
        catchError(this.handleError<FibonnaciLog[]>('Error occured'))
      );
  }

  public getFibonnaciById(id: number): FibonnaciLog {
    return this.logs.find(x=>x.id == id);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
