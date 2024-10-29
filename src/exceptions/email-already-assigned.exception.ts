import { ConflictException } from '@nestjs/common';

export class EmailAlreadyAssignedException extends ConflictException {
  constructor(email: string) {
    super(`The email ${email} is already assigned to another customer.`);
  }
}
