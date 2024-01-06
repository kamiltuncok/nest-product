import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity('products')
export class Product {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column()
  price: number;

}
