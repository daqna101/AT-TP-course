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

// Products
const apple: Product = {
    name: "Apple",
    price: 2,
    category: "food"
};
const shirt: Product = {
    name: "T-Shirt",
    price: 30,
    category: "clothes"
}; 

const newSmartphone: Product = {
    name: "Samsung",
    price: 1000,
    category: "electronics"
}

const bannana: Product = {
    name: "bannana",
    price: 2,
    category: "food"
}

// customers
const productsCustOne: Product[] = [apple, shirt]
const customer: Customer = {
    name: 'Mladen Petrov',
    email: "mlade@email.com",
    cart: productsCustOne,
};

const productsCustTwo: Product[] = [apple, shirt, newSmartphone, bannana]
const customerTwo: Customer = {
    name: "Dayana Alexandrova",
    email: "dayana.a@email.com",
    cart: productsCustTwo
}

// functions 
function displayCart(customer: Customer): void {
    console.log(customer.name, customer.cart);
}

function filterByCategory(products: Product[], category: Category) {
    return products.filter(product => product.category === category);
}

function filteredProducts(customer: Customer, category: Category){
    const filteredP = filterByCategory(customer.cart, category)
    if (filteredP.length > 0) {
        console.log(`${customer.name} has these ${category} items in the cart: ${filteredP.map(p=>p.name).join(", ")}`);
    } else {
        console.log(`${customer.name} doesn't have any ${category} products in their cart.`);
    }
}

function calculateTotalPrice(customer: Customer): number {
    return customer.cart.reduce((total, product) => total + product.price, 0);
}
filteredProducts(customerTwo, "food");
filteredProducts(customerTwo, "electronics");

// displayCart(customerTwo);
// displayCart(customerTwo);
// console.log(`${customerTwo.name}'s total price: $${calculateTotalPrice(customerTwo)}`);
// console.log(`${customer.name}'s total price: $${calculateTotalPrice(customer)}`);


