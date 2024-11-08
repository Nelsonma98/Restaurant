import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  clientRestaurantId: string;
}
