import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {
    // Construtores para classes derivadas devem conter uma chamada 'super'
    super({
      secretOrKey: 'topSecret51', // Temporário
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Diz ao passport como extrair o token (qual a estratégia)
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload;
    const user: User = await this.usersRepository.findOne({ username });

    if (!user) {
      throw new UnauthorizedException();
    }

    // Passport irá injetar o user no request object do controller, sempre teremos acesso a ele
    return user;
  }
}
