import { Product } from './product.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { CreateProductDto } from './dto/create-product.dto'

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

  async insertProduct(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
}

  async getSingleProduct(productId: string): Promise<Product> {
    const objectId = new ObjectId(productId);
    return this.findProduct(objectId);
  }

  async updateProduct(productId: string, updateProductDto: CreateProductDto): Promise<Product> {
    const objectId = new ObjectId(productId);
    const product = await this.findProduct(objectId);
    Object.assign(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async deleteProduct(productId: string): Promise<void> {
    const objectId = new ObjectId(productId);
    const result = await this.productRepository.delete(objectId);
    if (result.affected === 0) {
      throw new NotFoundException('Silme İşlemi Başarısız.');
    }
  }

  private async findProduct(_id: ObjectId): Promise<Product> {
    const objectId = new ObjectId(_id);
    const product = await this.productRepository.findOne({ where: { _id } });
    if (!product) {
      throw new NotFoundException('Böyle Bir Ürün Bulunamadı.');
    }
    return product;
  }
}
