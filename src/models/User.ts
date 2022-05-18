import {prop, getModelForClass, Ref} from '@typegoose/typegoose'
import { Role } from './Role';
class User {
  @prop({required: true, })//mongoose
  firstName: string; //typescript

  @prop({required: true, })
lastName: string;

  @prop({required: true, trim: true})
  email: string;

  @prop({required: true, minlength: 5, })
  password: string;

  @prop({ref: () => Role, default: () => 'user'})
  roles: Ref<typeof Role>[];
}

export const UserModel = getModelForClass(User);