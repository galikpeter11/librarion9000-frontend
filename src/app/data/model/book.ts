export class Book {
  id: number;
  title: string;
  releaseYear: number;
  numberOfPages: number;
  content: string;


  constructor(id: number, title: string, releaseYear: number, numberOfPages: number, content: string) {
    this.id = id;
    this.title = title;
    this.releaseYear = releaseYear;
    this.numberOfPages = numberOfPages;
    this.content = content;
  }
}
