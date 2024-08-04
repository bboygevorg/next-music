import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-15">
        <Title text="All instruments" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Saxophone"
                items={[
                  {
                    id: 1,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 2,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 3,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 4,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 5,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Flute"
                items={[
                  {
                    id: 1,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 2,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 3,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 4,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 5,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                ]}
                categoryId={2}
              />
              <ProductsGroupList
                title="Clarinet"
                items={[
                  {
                    id: 1,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 2,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 3,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 4,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                  {
                    id: 5,
                    name: "Yamaha Custom YSS-875EX",
                    imageUrl:
                      "https://saxbird.ru/upload/iblock/8fe/8feb9cda308fa6600292d75901b42f62.jpg",
                    price: 1500,
                    items: [{ price: 1500 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
