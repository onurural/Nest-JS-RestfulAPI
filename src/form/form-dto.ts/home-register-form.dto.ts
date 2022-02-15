import { Optional } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  Length,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class HomeRegisterForm {
  @ApiProperty({
    description: 'This is test description message',
  })
  @Prop()
  @Length(10, 20)
  @IsNotEmpty()
  street: string;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  @IsNumber()
  buildingDoorNumber: number;

  @ApiProperty() // swagger decorator
  @Prop() // database decorator
  @IsNotEmpty() // validation decorator(class-validator) package
  floor: string;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  // @MinLength(4)
  postCode: number;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  @IsNumber()
  bedroom: number;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  @IsNumber()
  block: number;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  @IsNumber()
  bathroom: number;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  @IsNumber()
  doorNumber: number;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  referralCode: string;

  @ApiProperty()
  @Prop()
  @Optional()
  advertLink: string;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  interiorExterior: string;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  realEstateType: string;

  @ApiProperty()
  @Prop()
  @Optional()
  elevator: boolean;

  @ApiProperty()
  @Prop()
  @Optional()
  garage: boolean;

  @ApiProperty()
  @Prop()
  @Optional()
  terrace: boolean;

  @ApiProperty()
  @Prop()
  @Optional()
  swimmingPool: boolean;

  @ApiProperty()
  @Prop()
  @Optional()
  storageRoom: boolean;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  salesReason: string;
  whenToMove: string;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  @MinLength(2)
  fullName: string;

  @ApiProperty()
  @Prop()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  agreementAccepted: boolean;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  thirdPartyAccepted: boolean;

  @ApiProperty()
  @Prop()
  @IsNotEmpty()
  agreementApproval: boolean;
}

export const HomeRegisterFormSchema =
  SchemaFactory.createForClass(HomeRegisterForm);
