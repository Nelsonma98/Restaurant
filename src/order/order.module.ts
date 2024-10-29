import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRestaurantModule } from 'src/client-restaurant/client-restaurant.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), ClientRestaurantModule],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
