interface Product {
  name: string;
  price: number;
  category: Category;
}

type Category = "food" | "clothes" | "electronics";

interface Customer {
  name: string;
  email: string;
  cart: Product[];
};

const apple: Product = {
    name: "Apple",
    price: 2,
    category: "food"
};
const shirt: Product = {
    name: "T-Shirt",
    price: 30,
    category: "clothes"
}; // add more products

const products: Product[] = [apple, shirt]
const customer: Customer = {
    name: 'Mladen Petrov',
    email: "mlade@email.com",
    cart: products,
};
// add second Customer

// add function displayCart- owner, products
// add function filterByCategory - receive products as massive and category as params and filter the products by given category
// add function calculateTotalPrice - calculate total price of the products in the customer cart // receives customer data and all pproduct price