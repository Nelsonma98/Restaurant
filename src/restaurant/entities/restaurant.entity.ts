import { IsInt, IsString, Max, Min } from 'class-validator';
import { ClientRestaurant } from 'src/client-restaurant/entities/client-restaurant.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  address: string;

  @Column()
  @IsInt()
  @Max(100, { message: 'La capacidad máxima es 100 clientes' })
  @Min(1, { message: 'La capacidad mínima es de 1 cliente' })
  capacity: number;

  @OneToMany(
    () => ClientRestaurant,
    (clientRestaurant) => clientRestaurant.restaurant,
  )
  clientRestaurants: ClientRestaurant[];
}
