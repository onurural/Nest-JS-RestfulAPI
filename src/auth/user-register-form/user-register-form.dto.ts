import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserRegisterForm {
  @Prop()
  name: string;
  @Prop()
  apiKey: string;
}
export const UserRegisterFormSchema =
  SchemaFactory.createForClass(UserRegisterForm);
