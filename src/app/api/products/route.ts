import { NextResponse } from 'next/server';

const fetchProducts = async () => {
  return [
    {
      id: 1,
      name: 'Mens Automatic Watch 40MM',
      details:
        'Mens Automatic Watch 40MM Stainless Steel Roman Numerals Diamond Luxury Waterproof Date Day Folding Buckle Watch',
      price: 80,
      image: '/product1.webp',
    },
    {
      id: 2,
      name: 'Spectrum SV-9306-M',
      details:
        'Sveston Spectrum Is a Gents Stainless Steel Watch Having 41mm Dial and Comes with Stainless Steel Watch Case',
      price: 130,
      image: '/product2.webp',
      originalPrice: 150,
      sale: false,
    },
    {
      id: 3,
      name: 'VANESIO SV-9304-M',
      details:
        'SVESTON VANESIO SV-9304-M Is a Gents Stainless Steel Watch Having 39mm Dial and Comes with Stainless Steel Watch Case With Dual Time',
      price: 200,
      image: '/product3.webp',
    },
    {
      id: 4,
      name: 'Bloom SV-7029-M',
      details:
        'Sveston Bloom is a Gents Leather Watch Having 37mm Dial and Comes with Luxury Watch Case',
      price: 230,
      image: '/product4.webp',
      originalPrice: 260,
      sale: true,
    },
    {
      id: 5,
      name: 'Dragon SV-9348-M',
      details:
        "The Sveston Dragon is a sophisticated gentlemen's timepiece featuring a 34mm stainless-steel dial, elegantly presented in a luxury watch case",
      price: 250,
      image: '/product5.webp',
    },
    {
      id: 6,
      name: 'Captain Cook SV-7521-M',
      details:
        'Sveston Captain Cook Is a Gents Stainless-Steel Watch Having 36mm Dial and Comes with Luxury Watch Case',
      price: 240,
      image: '/product6.webp',
      originalPrice: 280,
      sale: true,
    },
    {
      id: 7,
      name: 'Wondrous SV-9352-M',
      details:
        'Sveston Wondrous Is a Gents Stainless Steel Watch Having 37mm Dial and Comes with Stainless Steel Watch Case With Dual Time',
      price: 290,
      image: '/product7.webp',
    },
    {
      id: 8,
      name: 'ROLEX GMT-MASTER II',
      details:
        'Stunning Gents Rolex GMT-Master II Watch in 18ct Yellow Gold and Stainless Steel with a Black Dial and 18ct Yellow Gold Rotating Bezel with a Grey and Black Ceramic Insert',
      price: 300,
      image: '/product8.png',
      originalPrice: 350,
      sale: true,
    },
    {
      id: 9,
      name: 'A. Lange & Sohne 1815 Up/Down Watch',
      details:
        'The elegant A. Lange & Söhne 1815 Up/Down ref.221.021 is an embodiment of German watchmaking',
      price: 150,
      image: '/product9.jpg',
    },
  ];
};

const fetchProductById = async (id: number) => {
  const products = await fetchProducts();
  return products.find((product) => product.id === id);
};

export async function GET() {
  const products = await fetchProducts();
  return NextResponse.json(products);
}
