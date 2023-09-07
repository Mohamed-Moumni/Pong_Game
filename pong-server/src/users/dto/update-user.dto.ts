import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  twoFactor?: boolean;
  xp?: number;
  laddelLevel: number;
}
