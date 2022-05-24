import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

// createParamDecorator espera por uma arrow function
export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest(); // request body
    return req.user;
  },
);

/* Intuito desse decorator: Evitar a necessidade de extrair todo o request object, todas as vezes, 
apenas para recuperar o usuário */
