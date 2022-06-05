import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @ApiProperty({
    example: 'Neo',
    description: 'Nome do usuário com tamanho entre 4 e 20 caracteres',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @ApiProperty({
    example: 'Ne0@matrix',
    description:
      'Senha do usuário com tamanho de 8 a 32 caracteres (deve conter no mínimo: uma letra maiúscula, uma minúscula e um número ou caractere especial',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;
}

// Regex:
// Conter no mínimo uma letra maiúscula
// Conter no mínimo uma letra minúscula
// Conter no mínimo um número ou caractere especial
// Sem validação de tamanho min. e max
