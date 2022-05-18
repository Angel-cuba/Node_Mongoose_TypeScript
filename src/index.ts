import mongoose from 'mongoose';
import {configDB} from './keytoserver/key'
import {UserModel} from './models/User';
import ProductModel from './models/Products'
import RoleModel from './models/Role'


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

// const product =await ProductModel.create({
//   name: 'Product 1',
//   price: 100,
//   url: 'https://www.google.com',
//   tags: ['tag1', 'tag2'],
//   comments: [{
//     comment: 'comment 1'
//   }, {
//     comment: 'comment 2'
//   }],
//   owner: '6282115f73f94ba8418776f0'
// })

// console.log(product);


// const results = await RoleModel.insertMany([
//   {
//     name: 'admin'
//   },
//   {
//     name: 'user'
//   },
//   {
//     name: 'guest'
//   }
// ])
// console.log(results);


// const user = new UserModel({
//   firstName: 'Alto',
//   lastName: 'Keyt',
//   email: 'alto2@gmail.com',
//   password: '12345',
//   roles: ["6284c9eabcfd7fc65ec97184", "6284c9eabcfd7fc65ec97186"],
// })
// await user.save()
// console.log(user);
const user = await UserModel.findById('6284df4a656e846afbcd1845').populate('roles', 'name -_id')
console.log(user);
}

executeQuery();