import { OrderList } from "../types/cart";

export const orderList: OrderList[] = [
  {
    orderId: 499,
    orderItems: [
      {
        amount: 2,
        item: {
          category: {
            name: 'forHer', 
            id: 'pants'
          },
          createdAt: "2022-07-08",
          createdBy: {
            name: 'KRVN studio', 
            id: '1001'
          },
          description: "cool pants",
          id: "117",
          image: "/cloth/forHer/pants/10-80-112822-80519-find-1000-02-1539934386-500x500.jpeg",
          price: 99,
          slug: "",
          title: "coolest pants ever",
        },
        orderId: 0.11898645356176041,
        size: "XS",
      }
    ],
    price: 198,
    status: {
      inProgress: false,
      completed: true,
      customerRefusal: false,
      sellerRefusal: false,
    },
    payed: false,
    customer: {
      id: 1,
      name: 'user',
      address: 'country, city, street, building',
    }
  },
  {
    orderId: 895,
    orderItems: [
      {
        amount: 2,
        item: {
          category: {
            name: 'forHer', 
            id: 'snickers'
          },
          createdAt: "2022-07-08",
          createdBy: {
            name: 'KRVN studio', 
            id: '1001'
          },
          description: "awesome snickers",
          id: "122",
          image: "/cloth/forHer/snickers/ellx-women-snickersz-2988-2-550x550.jpeg",
          price: 150,
          slug: "",
          title: "coolest shirt ever",
        },
        orderId: 0.01802116826271183,
        size: "XS",
      },
      {
        amount: 2,
        item: {
          category: {
            name: 'forHim', 
            id: 'snickers'
          },
          createdAt: "2022-07-08",
          createdBy: {
            name: 'KRVN studio', 
            id: '1001'
          },
          description: "awesome snickers",
          id: "108",
          image: "/cloth/forHim/snickers/images.jpeg",
          price: 150,
          slug: "",
          title: "coolest shirt ever",
        },
        orderId: 0.11151640975605792,
        size: "XS",
      },
    ],
    price: 600,
    status: {
      inProgress: true,
      completed: false,
      customerRefusal: false,
      sellerRefusal: false,
    },
    payed: false,
    customer: {
      id: 1,
      name: 'user',
      address: 'country, city, street, building',
    }
  }
]