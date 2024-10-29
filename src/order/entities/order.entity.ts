import { IsString } from 'class-validator';
import { ClientRestaurant } from 'src/client-restaurant/entities/client-restaurant.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  description: string;

  @ManyToOne(
    () => ClientRestaurant,
    (clientRestaurant) => clientRestaurant.orders,
    {
      onDelete: 'CASCADE',
    },
  )
  clientRestaurant: ClientRestaurant;
}
