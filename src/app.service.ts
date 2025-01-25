import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from "./dto's/create-book.dto";
import { UpdateBookDto } from "./dto's/update-book.dto";

export interface Book {
  id: string;
  author: string;
}

@Injectable()
export class AppService {
  private books: Book[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  findAll() {
    return this.books;
  }

  findOne(id: string) {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found.`);
    }
    return book;
  }

  create(createBookDto: CreateBookDto) {
    const newBook = {
      id: (this.books.length + 1).toString(),
      ...createBookDto,
    };
    this.books.push(newBook);
    return newBook;
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found.`);
    }
    const updatedBook = { ...this.books[bookIndex], ...updateBookDto };
    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }

  remove(id: string) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found.`);
    }
    const deletedBook = this.books.splice(bookIndex, 1);
    return deletedBook;
  }
}
