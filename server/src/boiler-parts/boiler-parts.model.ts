import { Column, Model, Table } from 'sequelize-typescript';

// Step 26 - создаем файл boiler-parts.model.ts - модель таблицы
@Table
export class BoilerParts extends Model {
  @Column
  boiler_manufacturer: string;

  @Column({ defaultValue: 0 })
  price: number;

  @Column
  parts_manufacturer: string;

  @Column
  vendor_code: string;

  @Column
  name: string;

  @Column
  description: string;

  // Секвалайз не позоляет передавать массив. Поэтому мы на фронте будет переделывать строку в массив картинок
  @Column
  images: string;

  @Column({ defaultValue: 0 })
  in_stock: number;

  @Column({ defaultValue: false })
  bestsellers: boolean;

  @Column({ defaultValue: false })
  new: boolean;

  @Column
  popularity: number;

  @Column
  compatibility: string;
}
