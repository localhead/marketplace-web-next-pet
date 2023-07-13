import { Column, Model, Table } from 'sequelize-typescript';

// Step 0
@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;
}
