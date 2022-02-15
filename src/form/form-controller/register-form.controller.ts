import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { FormRepositoryService } from '../form-service/form-repository.service';
import { HomeRegisterForm } from '../form-dto.ts/home-register-form.dto';
import { ApiHeader, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('api-key')) // checking for api key on every request
@Controller('home-register-form')
export class RegisterFormController {
  private readonly logger = new Logger();
  constructor(private readonly formRepoService: FormRepositoryService) {}

  @ApiHeader({
    // generates api key field in swagger
    name: 'api-key',
  })
  // swagger
  @ApiResponse({ status: 201, description: 'New Home Added succesfully' })
  @Post()
  async createHomeRegister(@Body() registerForm: HomeRegisterForm) {
    this.formRepoService.addFormToRepository(registerForm);
    this.logger.log('new home added succesfully');
    return 'succes home register form ';
  }

  @Get()
  async getHomeRegisterForm() {
    this.logger.log('all forms are returned');
    return this.formRepoService.getForms();
  }

  @Get(':id')
  async getHomeRegisterFormWithID(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    this.logger.log('form returned succesfully with Id :)');
    return this.formRepoService.getForms(id);
  }
}
