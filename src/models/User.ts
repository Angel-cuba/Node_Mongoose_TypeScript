import {prop, getModelForClass, Ref, ReturnModelType, pre, post} from '@typegoose/typegoose'
import { Role } from './Role';
import bcrypt from 'bcryptjs';


//Se ejecuta antes de salvar al usuario
@pre<User>('save', async function() {
    this.firstName = this.firstName.toLowerCase();
    this.password = await bcrypt.hash(this.password, 10)
})
//Despues del metodo post
@post<User>('save', async function() {
    console.log('User saved')
})


class User {
  @prop({required: true, })//mongoose
  firstName: string; //typescript

  @prop({required: true, })
lastName: string;

  @prop({required: true, trim: true})
  email: string;

  @prop({required: true, minlength: 5, })
  password: string;

  @prop({ref: () => Role})
  roles: Ref<typeof Role>[];

//Static function to search by name
static async findByFirstName(this: ReturnModelType<typeof User>,firstName: string) {
    return  this.find({firstName})
  }

//instance to encrypt password
  encryptPassword(password: string) {
    return  password
  }

}

export const UserModel = getModelForClass(User);