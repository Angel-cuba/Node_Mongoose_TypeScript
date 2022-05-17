import {prop, getModelForClass} from '@typegoose/typegoose'
class User {
  @prop({required: true, })//mongoose
  firstName: string; //typescript

  @prop({required: true, })
lastName: string;

  @prop({required: true, trim: true, unique: true, })
  email: string;

  @prop({required: true, minlength: 5, })
  password: string;
}

const UserModel = getModelForClass(User);
export default UserModel;