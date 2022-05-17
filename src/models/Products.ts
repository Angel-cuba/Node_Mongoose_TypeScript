import  {getModelForClass, modelOptions, prop} from '@typegoose/typegoose'; 
import {nanoid }from 'nanoid';

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
}

const ProductsModel = getModelForClass(Products);
export default ProductsModel