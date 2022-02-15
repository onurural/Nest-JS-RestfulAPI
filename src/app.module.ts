import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { RegisterFormController } from './form/form-controller/register-form.controller';
import {
  HomeRegisterForm,
  HomeRegisterFormSchema,
} from './form/form-dto.ts/home-register-form.dto';
import { FormRepositoryService } from './form/form-service/form-repository.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://onurural:OM1nPrF685IR@cluster0.lqkwt.mongodb.net/Cluster0?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: HomeRegisterForm.name, schema: HomeRegisterFormSchema },
    ]),
    AuthModule,
  ],
  controllers: [RegisterFormController],
  providers: [FormRepositoryService],
})
export class AppModule {}
