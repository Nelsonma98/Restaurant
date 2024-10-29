import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm.config';
import { ClientRestaurantModule } from './client-restaurant/client-restaurant.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    ClientModule,
    RestaurantModule,
    OrderModule,
    ClientRestaurantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
