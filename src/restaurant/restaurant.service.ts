import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    const restaurant =
      await this.restaurantRepository.create(createRestaurantDto);
    return await this.restaurantRepository.save(restaurant);
  }

  async findAll() {
    return await this.restaurantRepository.find();
  }

  async findOne(id: string) {
    return await this.restaurantRepository.findOneBy({ id });
  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return await this.restaurantRepository.update(id, updateRestaurantDto);
  }

  async remove(id: string) {
    return await this.restaurantRepository.delete(id);
  }
}
