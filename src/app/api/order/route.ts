import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { productId, productName, totalAmount, email, address, paymentMethod } = body;

    if (!productId || !productName || !totalAmount || !email || !address || !paymentMethod) {
      return NextResponse.json(
        { message: 'Missing required fields in the order data.' },
        { status: 400 } 
      );
    }

    const orderId = `ORD-${Math.floor(Math.random() * 1000000)}`;
    console.log('Order Placed:', {
      orderId,
      productId,
      productName,
      totalAmount,
      email,
      address,
      paymentMethod,
    });

    return NextResponse.json(
      {
        message: 'Order placed successfully!',
        orderId,
      },
      { status: 201 } 
    );
  } catch (error) {
    console.error('Error processing the order:', error);

    return NextResponse.json(
      { message: 'An error occurred while placing the order. Please try again.' },
      { status: 500 } 
    );
  }
}
