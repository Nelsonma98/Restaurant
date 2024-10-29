import { IsEmail, IsInt, IsPhoneNumber, IsString, Min } from 'class-validator';
import { ClientRestaurant } from 'src/client-restaurant/entities/client-restaurant.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsPhoneNumber(null)
  phone: string;

  @Column()
  @IsInt()
  @Min(18, { message: 'El cliente debe ser mayor de 18 años' })
  age: number;

  @OneToMany(
    () => ClientRestaurant,
    (clientRestaurant) => clientRestaurant.client,
  )
  clientRestaurants: ClientRestaurant[];
}
