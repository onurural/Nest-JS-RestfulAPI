import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader } from '@nestjs/swagger';
import { UserRegisterForm } from './user-register-form.dto';
import { UserRegisterService } from './user-register-service';

@Controller('user-register-form')
export class UserRegisterFormController {
  constructor(private readonly userRegisterService: UserRegisterService) {}
  @Post()
  @ApiHeader({
    name: 'api-key',
  })
  @UseGuards(AuthGuard('api-key'))
  async createUser(@Body() userRegisterForm: UserRegisterForm) {
    this.userRegisterService.addUser(userRegisterForm);
  }
}
