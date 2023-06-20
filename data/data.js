import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "شطرنح",
      slug: "shatrang",
      image: "/images/shirt1.jpg",
      price: 70,
      count: 20,
      des: "شطرنج بازی فکری",
    },
    {
      name: "منچ",
      slug: "mench",
      image: "/images/shirt2.jpg",
      price: 70,
      count: 20,
      des: "منچ بازی فکری",
    },
    {
      name: "هفت خبیث",
      slug: "haft-khabis",
      image: "/images/shirt3.jpg",
      price: 70,
      count: 20,
      des: "هفت خبیث بازی فکری",
    },
    {
      name: "تخته نرد",
      slug: "takhte",
      image: "/images/pants1.jpg",
      price: 70,
      count: 20,
      des: "تخته نرد بازی فکری",
    },
    {
      name: "مافیا",
      slug: "mafia",
      image: "/images/pants2.jpg",
      price: 70,
      count: 20,
      des: "مافیا بازی فکری",
    },
    {
      name: "پوکر",
      slug: "poker",
      image: "/images/pants3.jpg",
      price: 70,
      count: 20,
      des: "پوکر بازی فکری",
    },
  ],
};

export default data;
