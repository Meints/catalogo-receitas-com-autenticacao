import { createUserSchema } from './create-user.dto';
import { createZodDto } from 'nestjs-zod';

const UpdateUserSchema = createUserSchema.partial();

export class UpdateUserDto extends createZodDto(UpdateUserSchema) {}
