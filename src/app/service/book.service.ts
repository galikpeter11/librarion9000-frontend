import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../data/model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClient: HttpClient) {
  }

  public findAllTickets(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`http://localhost:8080/books/list`);
  }
}
