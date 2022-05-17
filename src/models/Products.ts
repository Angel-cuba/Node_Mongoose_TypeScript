import  {getModelForClass, prop} from '@typegoose/typegoose'; 

class Comments {
    comment: string;
}

class Products {
  @prop({required: true,trim: true})
  name: string;
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