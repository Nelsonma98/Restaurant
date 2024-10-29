import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { Order } from 'src/order/entities/order.entity';

@Entity()
export class ClientRestaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Client, (client) => client.clientRestaurants, {
    onDelete: 'CASCADE',
  })
  client: Client;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.clientRestaurants, {
    onDelete: 'CASCADE',
  })
  restaurant: Restaurant;

  @OneToMany(() => Order, (order) => order.clientRestaurant)
  orders: Order[];
}
