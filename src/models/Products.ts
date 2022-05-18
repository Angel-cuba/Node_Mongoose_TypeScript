import  {getModelForClass, modelOptions, prop, Ref} from '@typegoose/typegoose'; 
import {nanoid }from 'nanoid';
import  {UserModel } from './User';

@modelOptions({
  schemaOptions: {
    timestamps: true,
    _id: false,
  },
})
class Comments {
    comment: string;
}

class Products {
  @prop({required: true,trim: true})
  name: string;

@prop({required: true, default: () => nanoid()})
sku: string;

  @prop({default: 0})
  price: number;

  @prop({lowercase: true, trim: true})
  url: string;

  @prop()
  tags: string[];

  @prop({type: ()=> [Comments]})
  comments: Comments[];

@prop({ref: ()=> UserModel})
  owner: Ref<typeof UserModel>;
}

const ProductsModel = getModelForClass(Products);
export default ProductsModel