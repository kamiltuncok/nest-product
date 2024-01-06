import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe, UsePipes } from "@nestjs/common";

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @UsePipes(ValidationPipe)
    @Post('add')
    async addProduct(@Body() createProductDto: CreateProductDto) {
      const generatedId = await this.productService.insertProduct(createProductDto);
      return { message: 'Ekleme İşlemi Başarılı' };
    }

    @Get("getAll")
    async getAllProducts() {
      const products = await this.productService.getProducts();
      return products;
    }

    @Get('getById/:id')
    getSingleProduct(@Param('id') productId: string) {
      return this.productService.getSingleProduct(productId);
    }

    @UsePipes(ValidationPipe)
    @Patch('update/:id')
    async updateProduct(@Param('id') productId: string, @Body() updateProductDto: CreateProductDto) {
      await this.productService.updateProduct(productId, updateProductDto);
      return { message: 'Güncelleme İşlemi Başarılı' };
    }

    @Delete('delete/:id')
    async removeProduct(@Param('id') productId: string) {
      await this.productService.deleteProduct(productId);
      return { message: 'Silme İşlemi Başarılı' };
    }
}
