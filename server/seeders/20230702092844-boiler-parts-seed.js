// Step 36 npm i @faker-js/faker
const { faker } = require('@faker-js/faker');

('use strict');

const boilerManufacturers = [
  'Adidas',
  'Nike',
  'Puma',
  'Air Jordan',
  'Sacai',
  'Reebok',
  'Under Armor',
];

const partsManufacturer = [
  'Greece',
  'USA',
  'Italy',
  'Pakistan',
  'Bangladesh',
  'India',
  'China',
  'Vietnam',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    // Step 37 - рандомно генерим базу данных через faker
    return queryInterface.bulkInsert(
      'BoilerParts',
      [...Array(100)].map(() => ({
        boiler_manufacturer:
          boilerManufacturers[
            Math.floor(Math.random() * boilerManufacturers.length)
          ],
        parts_manufacturer:
          partsManufacturer[
            Math.floor(Math.random() * boilerManufacturers.length)
          ],
        price: faker.random.numeric(4),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        images: JSON.stringify(
          [...Array(2)].map(
            () =>
              `${faker.image.urlLoremFlickr()}?random=${faker.random.numeric(
                30,
              )}`,
          ),
        ),
        vendor_code: faker.internet.password(),
        in_stock: faker.random.numeric(1),
        bestsellers: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: faker.random.numeric(3),
        compatibility: faker.lorem.sentence(7),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('BoilerParts', null, {});
  },
};
