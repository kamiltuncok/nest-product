import { IsNotEmpty,IsNumber,IsString,IsInt } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Ürün Alanı Boş Olamaz' })
  productName: string;

  @IsNotEmpty({ message: 'Açıklama Alanı Boş Olamaz' })
  description: string;

  @IsInt({ message: 'Fiyat Alanı İstenilen Türde Değil' })
  @IsNotEmpty({ message: 'Fiyat Alanı Boş Olamaz' })
  price: number;
}
