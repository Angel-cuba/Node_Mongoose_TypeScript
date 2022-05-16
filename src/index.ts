import mongoose from 'mongoose';
import {configDB} from './keytoserver/key'


async function connectDB() {
  const db = await mongoose.connect(configDB.db_URI)
  console.log('DB Connected', db.connection.name);
}

connectDB();