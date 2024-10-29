import { Controller, Post, Param, Delete } from '@nestjs/common';
import { ClientRestaurantService } from './client-restaurant.service';

@Controller('client-restaurant')
export class ClientRestaurantController {
  constructor(
    private readonly clientRestaurantService: ClientRestaurantService,
  ) {}

  @Post(':clientId/:restaurantId')
  async addClientToRestaurant(
    @Param('clientId') clientId: string,
    @Param('restaurantId') restaurantId: string,
  ) {
    return await this.clientRestaurantService.addClientToRestaurant(
      clientId,
      restaurantId,
    );
  }

  @Delete(':id')
  async deleteClientRestaurant(@Param('id') id: string) {
    return await this.clientRestaurantService.deleteClientRestaurant(id);
  }
}
