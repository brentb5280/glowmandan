const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Grumpy Gus' },
    { name: 'Rufus the Pack Rat' },
    { name: 'Stickers' },
    { name: 'Pens' },
    { name: 'Bitz and Bytes Key Chains' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Grumpy Gus (green)',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'Grumpy-gus-green.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 50
    },
    {
      name: 'Grumpy Gus (blue)',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'Grumpy-gus-blue.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 50
    },
    {
      name: 'Rufus the Pack Rat (multi-color)',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'Rufus-multicolor.jpg',
      price: 4.99,
      quantity: 20
    },
    {
      name: 'Rufus the Pack Rat (grey)',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'Rufus-grey.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Grumpy Gus Anniversary Sticker',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'Grumpy-gus-1year.jpg',
      price: 0.99,
      quantity: 30
    },
    {
      name: 'Glow Man Dan Sticker',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'Glowmandan-sticker.jpg',
      price: 0.99,
      quantity: 30
    },
    {
      name: 'Grumpy Gus Pen',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'Grumpy-gus-pen.jpg',
      price: 5.99,
      quantity: 100
    },
    {
      name: 'Bitz and Bytes (blue face)',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'Bitz-Bytes-Blue.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Bitz and Bytes (multi-color)',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'Bitz-Bytes-Multicolor.jpg',
      price: 9.99,
      quantity: 100
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Nick',
    lastName: 'M',
    email: 'NickM@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Tom',
    lastName: 'Brady',
    email: 'TomBrady@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
