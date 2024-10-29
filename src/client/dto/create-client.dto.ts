import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsPhoneNumber, IsString, Min } from 'class-validator';

export class CreateClientDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsPhoneNumber(null)
  phone: string;

  @ApiProperty()
  @IsInt()
  @Min(18, { message: 'El cliente debe ser mayor de 18 años' }) // Validación de edad
  age: number;
}
