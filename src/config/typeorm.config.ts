import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const isProduction = configService.get('STAGE') === 'prod'; // Bool

    return {
      ssl: isProduction,
      extra: {
        ssl: isProduction ? { rejectUnauthorized: false } : null,
      },
      type: 'postgres',
      url: configService.get('DATABASE_URL'),
      autoLoadEntities: true, // Seguir a convenção name.entity.ts
      synchronize: true, // Não recomendado em produção
    };
  },
};
