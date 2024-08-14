import { accessories, categories } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Mariam",
        email: "mariam@test.ru",
        password: hashSync("1234567", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@test.ru",
        password: hashSync("1234567", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.accessories.createMany({
    data: accessories,
  });

  const sax1 = await prisma.product.create({
    data: {
      name: "Roy Benson SS-302",
      imageUrl:
        "https://saxbird.ru/upload/iblock/b48/b483b82422c9531fe783f5bed084f123.jpg",
      categoryId: 1,
      accessories: {
        connect: accessories.slice(0, 5),
      },
    },
  });

  const sax2 = await prisma.product.create({
    data: {
      name: "Roy Benson AS-201",
      imageUrl:
        "https://saxbird.ru/upload/iblock/28b/28bdddf1a1755ced995e26f69c6ee853.jpg",
      categoryId: 1,
      accessories: {
        connect: accessories.slice(6, 17),
      },
    },
  });

  const sax3 = await prisma.product.create({
    data: {
      name: "Roy Benson TS-202",
      imageUrl:
        "https://saxbird.ru/upload/iblock/28b/28bdddf1a1755ced995e26f69c6ee853.jpg",
      categoryId: 1,
      accessories: {
        connect: accessories.slice(18, 30),
      },
    },
  });

  const sax4 = await prisma.product.create({
    data: {
      name: "D.Krenz SS-761 GL",
      imageUrl:
        "https://saxbird.ru/upload/resize_cache/iblock/234/335_300_1/234266b70b21a725f8b9b07323f164d1.jpg",
      categoryId: 1,
      accessories: {
        connect: accessories.slice(0, 5),
      },
    },
  });

  const sax5 = await prisma.product.create({
    data: {
      name: "Weissenberg COSMOS A-500GL",
      imageUrl:
        "https://saxbird.ru/upload/resize_cache/iblock/ee2/335_300_1/ee20cbf284ee9e3d7cd360c9a77e4b30.jpg",
      categoryId: 1,
      accessories: {
        connect: accessories.slice(6, 17),
      },
    },
  });

  const sax6 = await prisma.product.create({
    data: {
      name: "Yamaha YTS-280S",
      imageUrl:
        "https://saxbird.ru/upload/resize_cache/iblock/193/335_300_1/193486021ed6a58161b163d49b28d43f.jpg",
      categoryId: 1,
      accessories: {
        connect: accessories.slice(18, 32),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: sax1.id,
        price: randomNumber(850, 850),
      },
      {
        productId: sax2.id,
        price: randomNumber(872, 872),
      },
      {
        productId: sax3.id,
        price: randomNumber(1127, 1127),
      },
      {
        productId: sax4.id,
        price: randomNumber(860, 860),
      },
      {
        productId: sax5.id,
        price: randomNumber(1300, 1300),
      },
      {
        productId: sax6.id,
        price: randomNumber(3000, 3000),
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "22222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      accessories: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Accessories" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
