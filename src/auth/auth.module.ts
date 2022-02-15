import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { HeaderApiKeyStrategy } from './auth-header-api-key.strategy';
import { UserRegisterFormController } from './user-register-form/user-register-form.controller';
import {
  UserRegisterForm,
  UserRegisterFormSchema,
} from './user-register-form/user-register-form.dto';
import { UserRegisterService } from './user-register-form/user-register-service';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    UserRegisterForm,
    MongooseModule.forFeature([
      { name: UserRegisterForm.name, schema: UserRegisterFormSchema },
    ]),
  ],
  controllers: [UserRegisterFormController],
  providers: [HeaderApiKeyStrategy, UserRegisterService],
})
export class AuthModule {}
