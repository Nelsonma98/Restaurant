// src/client-restaurant/client-restaurant.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientRestaurant } from './entities/client-restaurant.entity';
import { Client } from 'src/client/entities/client.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

@Injectable()
export class ClientRestaurantService {
  constructor(
    @InjectRepository(ClientRestaurant)
    private readonly clientRestaurantRepository: Repository<ClientRestaurant>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  async addClientToRestaurant(clientId: string, restaurantId: string) {
    const client = await this.clientRepository.findOneBy({ id: clientId });
    const restaurant = await this.restaurantRepository.findOneBy({
      id: restaurantId,
    });

    if (!client || !restaurant) {
      throw new Error('Customer or restaurant not found');
    }

    const currentClientCount = await this.clientRestaurantRepository.count({
      where: { restaurant: { id: restaurantId } },
    });

    if (currentClientCount >= restaurant.capacity) {
      throw new BadRequestException(
        `The restaurant has reached its maximum capacity of ${restaurant.capacity} customers.`,
      );
    }

    const clientRestaurant = this.clientRestaurantRepository.create({
      client,
      restaurant,
    });

    return this.clientRestaurantRepository.save(clientRestaurant);
  }

  async deleteClientRestaurant(id: string) {
    return await this.clientRestaurantRepository.delete(id);
  }
}
