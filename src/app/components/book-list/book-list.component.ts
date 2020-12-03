import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {MatTableDataSource} from '@angular/material/table';
import {Book} from '../../data/model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  dataSource: MatTableDataSource<Book> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'title', 'releaseYear', 'numberOfPages'];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.findAllTickets().subscribe(result => this.dataSource.data = result, error => console.error(error));
  }

}
