import { Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('add')
  add(@Query('a') a: number, @Query('b') b: number): number {
    return this.calculatorService.add(a, b);
  }

  @Get('substract')
  substract(@Query('a') a: number, @Query('b') b: number): number {
    return this.calculatorService.substract(a, b);
  }

  @Get('multiply')
  multiply(@Query('a') a: number, @Query('b') b: number): number {
    return this.calculatorService.multiply(a, b);
  }

  @Get('divide')
  divide(@Query('a') a: number, @Query('b') b: number): number {
    return this.calculatorService.divide(a, b);
  }
}
