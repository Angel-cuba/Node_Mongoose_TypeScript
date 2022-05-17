import mongoose from 'mongoose';
import {configDB} from './keytoserver/key'
import UserModel from './models/User';
import ProductModel from './models/Products'


async function connectDB() {
  const db = await mongoose.connect(configDB.db_URI)
  console.log('DB Connected', db.connection.name);
}

connectDB();


async function executeQuery() {
//   const user = new UserModel({
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'joedoe1@gmail.com',
//     password: '12345'
// })
// await user.save()

// const users = await UserModel.find()
//  console.log(users);

const product =await ProductModel.create({
  name: 'Product 1',
  price: 100,
  url: 'https://www.google.com',
  tags: ['tag1', 'tag2'],
  comments: [{
    comment: 'comment 1'
  }, {
    comment: 'comment 2'
  }]
})

console.log(product);

}

executeQuery();