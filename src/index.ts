import mongoose from 'mongoose';
import {configDB} from './keytoserver/key'
import UserModel from './models/User';


async function connectDB() {
  const db = await mongoose.connect(configDB.db_URI)
  console.log('DB Connected', db.connection.name);
}

connectDB();

const user = new UserModel({
    firstName: 'John',
    lastName: 'Doe',
    email: 'joedoe@gmail.com',
    password: '12345'
})

console.log(user);