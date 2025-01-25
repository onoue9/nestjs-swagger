import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateBookDto } from "./dto's/create-book.dto";
import { UpdateBookDto } from "./dto's/update-book.dto";
import { Book } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/books')
  findAll(): Book[] {
    return this.appService.findAll();
  }

  @Get('books/:id')
  findOne(@Param('id') id: string): Book {
    return this.appService.findOne(id);
  }

  @Post('/books')
  create(@Body() createBookDto: CreateBookDto) {
    return this.appService.create(createBookDto);
  }

  @Put('books/update/:id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.appService.update(id, updateBookDto);
  }

  @Delete('books/delete/:id')
  remove(@Param('id') id: string): Book[] {
    return this.appService.remove(id);
  }
}
