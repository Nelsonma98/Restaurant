import { Module } from '@nestjs/common';
import { ClientRestaurantService } from './client-restaurant.service';
import { ClientRestaurantController } from './client-restaurant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRestaurant } from './entities/client-restaurant.entity';
import { Client } from 'src/client/entities/client.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientRestaurant, Client, Restaurant])],
  controllers: [ClientRestaurantController],
  providers: [ClientRestaurantService],
  exports: [ClientRestaurantService, TypeOrmModule],
})
export class ClientRestaurantModule {}
