import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateRestaurantDto {
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsInt()
  @Max(100, { message: 'La capacidad máxima es 100 clientes' }) // Validación de capacidad
  @Min(1, { message: 'La capacidad mínima es de 1 cliente' })
  capacity: number;
}
