import { z } from 'zod';
import { zodMessages } from 'src/utils/zodMessage';
import { createZodDto } from 'nestjs-zod';

export const createUserSchema = z.object({
  name: z.string().min(2, { message: zodMessages.required }),
  email: z.string().email({ message: zodMessages.invalidEmail }),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    .regex(/\d/, { message: 'A senha deve conter pelo menos um número' })
    .regex(/[a-z]/, {
      message: 'A senha deve conter pelo menos uma letra minúscula',
    })
    .regex(/[A-Z]/, {
      message: 'A senha deve conter pelo menos uma letra maiúscula',
    }),
});

export class CreateUserDto extends createZodDto(createUserSchema) {}
