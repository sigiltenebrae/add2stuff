import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Add2stuffapiService {

  constructor(private http: HttpClient) { }

  public autocompleteCard(card:string, options?: any): Promise<string[]> {
    return new Promise<string[]>((resolve) => {
      this.http.post('http://localhost:2999/api/cards/autocomplete',
        JSON.stringify({name: card, options: options? options: null}),
        {headers : new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((card_list: string[]) => {
        resolve(card_list);
      }, () => {
        resolve([]);
      });
    })
  }

  public getCardInfo(card: string): Promise<any> {
    return new Promise<any>((resolve) => {
      this.http.post('http://localhost:2999/api/cards',
        JSON.stringify({name: card}),
        {headers : new HttpHeaders({'Content-Type': 'application/json'})}).subscribe((card_data: any) => {
        resolve(card_data);
      }, () => {
        resolve({});
      });
    })
  }
}
