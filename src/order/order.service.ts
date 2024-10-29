import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { ClientRestaurant } from 'src/client-restaurant/entities/client-restaurant.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(ClientRestaurant)
    private readonly clientRestaurantRepository: Repository<ClientRestaurant>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const clientRestaurant = await this.clientRestaurantRepository.findOneBy({
      id: createOrderDto.clientRestaurantId,
    });

    if (!clientRestaurant) {
      throw new BadRequestException(
        `The customer does not belong to the restaurant`,
      );
    }

    const order = await this.orderRepository.create({
      description: createOrderDto.description,
      clientRestaurant,
    });
    return await this.orderRepository.save(order);
  }

  async findAll() {
    return await this.orderRepository.find();
  }

  async findOne(id: string) {
    return await this.orderRepository.findOneBy({ id });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return await this.orderRepository.update(id, updateOrderDto);
  }

  async remove(id: string) {
    return await this.orderRepository.delete(id);
  }
}
