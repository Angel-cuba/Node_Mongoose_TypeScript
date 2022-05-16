import {prop, getModelForClass} from '@typegoose/typegoose'
class User {
  @prop()
  firstName: string;

  @prop()
lastrName: string;

  @prop()
  email: string;

  @prop()
  password: string;
}

const UserModel = getModelForClass(User);
export default UserModel;