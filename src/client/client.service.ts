import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailAlreadyAssignedException } from 'src/exceptions/email-already-assigned.exception';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const clientEmail = await this.clientRepository.findOne({
      where: { email: createClientDto.email },
    });
    if (clientEmail) {
      throw new EmailAlreadyAssignedException(createClientDto.email);
    }
    if (createClientDto.age < 18) {
      throw new BadRequestException('The client must be over 18 years old');
    }

    const client = await this.clientRepository.create(createClientDto);
    return await this.clientRepository.save(client);
  }

  async findAll() {
    return await this.clientRepository.find();
  }

  async findOne(id: string) {
    return await this.clientRepository.findOneBy({ id });
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return await this.clientRepository.update(id, updateClientDto);
  }

  async remove(id: string) {
    return await this.clientRepository.delete(id);
  }
}
