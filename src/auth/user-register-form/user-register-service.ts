import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRegisterForm } from './user-register-form.dto';

@Injectable()
export class UserRegisterService {
  constructor(
    @InjectModel(UserRegisterForm.name) private model: Model<UserRegisterForm>,
  ) {}

  // adds new user to db
  addUser(userRegisterForm: UserRegisterForm) {
    const newForm = new this.model(userRegisterForm);
    newForm.save();
  }

  // query the db for given api key
  async checkApiKey(key: string): Promise<UserRegisterForm> {
    const value = await this.model.findOne().where({ apiKey: key });
    return value;
  }
}
