import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HomeRegisterForm } from '../form-dto.ts/home-register-form.dto';

@Injectable()
export class FormRepositoryService {
  constructor(
    @InjectModel(HomeRegisterForm.name) private model: Model<HomeRegisterForm>,
  ) {}
  private readonly formList: HomeRegisterForm[] = [];

  // saves the form to db
  addFormToRepository(form: HomeRegisterForm) {
    const newForm = new this.model(form);
    newForm.save();
    this.formList.push(form);
  }

  // returns local forms not in db
  getForms(id?: number) {
    if (id == undefined) {
      console.log(' all forms: ' + this.formList);
      return this.formList;
    } else {
      if (this.formList[id] != null) {
        return this.formList[id];
      } else {
        throw new HttpException('invalid id error', HttpStatus.FORBIDDEN);
      }
    }
  }
}
