import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const AuthenticateSchema = z.object({
  password: z.string({ required_error: 'Senha é obrigatória' }).min(1),
  email: z
    .string({ required_error: 'E-mail é obrigatório' })
    .email({ message: 'E-mail inválido.' }),
});

export class AuthenticateDTO extends createZodDto(AuthenticateSchema) {}
