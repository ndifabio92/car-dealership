import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly _carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this._carsService.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this._carsService.findById(id);
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Put(':id')
  update(@Body() body: any) {
    return body;
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return true;
  }
}
