import { Injectable } from '@nestjs/common';
import { ShoppingCart } from './shopping-cart.model';
import { UsersService } from 'src/users/users.service';
import { InjectModel } from '@nestjs/sequelize';
import { BoilerPartsService } from 'src/boiler-parts/boiler-parts.service';
import { AddToCartDto } from './data-transfer-objects/add-to-cart.dto';

// Step 44 - Создаем методы для модуля в shoppingcart.service.ts
@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart)
    private shoppingPartsModel: typeof ShoppingCart,
    private readonly usersService: UsersService,
    private readonly boilerPartsService: BoilerPartsService,
  ) {}

  // Метод по нахождению всех элементов корзины
  async findAll(userId: number | string): Promise<ShoppingCart[]> {
    return this.shoppingPartsModel.findAll({ where: { userId } });
  }

  // Метод по добавлению элементов в корзину
  async add(addToCartDto: AddToCartDto) {
    const cart = new ShoppingCart();
    // получаем пользователя
    const user = await this.usersService.findOne({
      where: { username: addToCartDto.username },
    });
    // получаем сам элемент корзины
    const part = await this.boilerPartsService.findOne(addToCartDto.partId);

    cart.userId = user.id;
    cart.partId = part.id;
    cart.boiler_manufacturer = part.boiler_manufacturer;
    cart.parts_manufacturer = part.parts_manufacturer;
    cart.price = part.price;
    cart.in_stock = part.in_stock;
    cart.image = JSON.parse(part.images)[0];
    cart.name = part.name;
    cart.total_price = part.price;

    // сохраняем в таблицу
    return cart.save();
  }

  async updateCount(count: number, partId: number): Promise<{ count: number }> {
    await this.shoppingPartsModel.update({ count }, { where: { partId } });

    const part = await this.shoppingPartsModel.findOne({ where: { partId } });

    return { count: part.count };
  }

  async updateTotalPrice(
    total_price: number,
    partId: number,
  ): Promise<{ total_price: number }> {
    await this.shoppingPartsModel.update(
      { total_price },
      { where: { partId } },
    );

    const part = await this.shoppingPartsModel.findOne({ where: { partId } });

    return { total_price: part.total_price };
  }

  async remove(partId: number): Promise<void> {
    const part = await this.shoppingPartsModel.findOne({ where: { partId } });

    await part.destroy();
  }

  async removeAll(userId: number): Promise<void> {
    await this.shoppingPartsModel.destroy({ where: { userId } });
  }
}
