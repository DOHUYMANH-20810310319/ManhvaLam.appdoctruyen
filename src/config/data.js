import products from "./products";

const categories = [
    {
        id: 1,
        title: "Tất cả",
        recipes: products,
    },
    {
        id: 2,
        title: "Shounen",
        recipes: [...products.slice(0, 3)],
    },
    {
        id: 3,
        title: "Jump",
        recipes: [...products.slice(3, 7)],
    },
    {
        id: 4,
        title: "Comedy",
        recipes: [...products.slice(7, 8)],
    },
];

export default categories;