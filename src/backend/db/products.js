import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // Men's Clothing
  {
    _id: "3fbe8787-7618-4606-aee2-5df44023578b",
    title: "T-shirts for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 1349,
    discount: 17,
    rating: 4.5,
    reviewers: 42,
    categoryName: "men"
  },
  {
    _id: "9d8b7008-53b7-4ef1-ae7a-a9bf3cafe69b",
    title: "Polo shirts for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 3299,
    discount: 30,
    rating: 3.5,
    reviewers: 28,
    categoryName: "men"
  },
  {
    _id: "1df47f33-50e1-4b4d-9e7e-7f73cabf42c9",
    title: "Casual shirts for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 4199,
    discount: 45,
    rating: 4,
    reviewers: 34,
    categoryName: "men"
  },
  {
    _id: "098adab5-33d2-47de-9e88-8652aee3ab2b",
    title: "Dress shirts for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 2499,
    discount: 20,
    rating: 4.2,
    reviewers: 16,
    categoryName: "men"
  },
  {
    _id: "14b675f3-aa86-453b-9e37-6512c5038e85",
    title: "Hoodies for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 1899,
    discount: 15,
    rating: 4.8,
    reviewers: 36,
    categoryName: "men"
  },
  {
    _id: "ab8470bf-eb16-41e7-83e5-d8b76de44e22",
    title: "Sweaters for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 1799,
    discount: 25,
    rating: 4.6,
    reviewers: 29,
    categoryName: "men"
  },
  {
    _id: "f5db64ed-ba43-42eb-8dcd-9641762826e4",
    title: "Sweatshirts for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 1499,
    discount: 10,
    rating: 4.4,
    reviewers: 47,
    categoryName: "men"
  },
  {
    _id: "e1e74d78-1317-4a20-bdd4-4e02165c513a",
    title: "Jackets for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 2999,
    discount: 20,
    rating: 4.2,
    reviewers: 21,
    categoryName: "men"
  },
  {
    _id: "4b5ef063-1383-4ff0-b883-ea5dc0e140dd",
    title: "Blazers for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 3499,
    discount: 10,
    rating: 4.7,
    reviewers: 15,
    categoryName: "men"
  },
  {
    _id: "34e68c14-667e-4e1b-9570-cc77a1041902",
    title: "Tank tops for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 999,
    discount: "",
    rating: 3.9,
    reviewers: 25,
    categoryName: "men"
  },
  {
    _id: "42fb336d-ea86-4824-8e11-7c138133abae",
    title: "Henley shirts for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 1299,
    discount: 5,
    rating: 4.1,
    reviewers: 18,
    categoryName: "men"
  },
  {
    _id: "9dc65ec2-35ad-4b28-94de-496a1cb8f256",
    title: "Long-sleeve shirts for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 1999,
    discount: 15,
    rating: 4.5,
    reviewers: 27,
    categoryName: "men"
  },
  {
    _id: "6ddbe8b0-8900-4531-8f37-6a67ebf79b54",
    title: "Flannel shirts for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 1599,
    discount: 10,
    rating: 4.3,
    reviewers: 20,
    categoryName: "men"
  },
  {
    _id: "bdf7d39b-4a01-42da-96f7-0a1ed3e5a4f3",
    title: "Rugby shirts for Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg", // Leave the image blank for now
    price: 2199,
    discount: "",
    rating: 4.0,
    reviewers: 14,
    categoryName: "men"
  },

  // Women's Clothing
  {
    _id: "7d15306a-5201-4b60-bb26-150d04e02b08",
    title: "T-shirts for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 1299,
    discount: 20,
    rating: 4.7,
    reviewers: 30,
    categoryName: "women"
  },
  {
    _id: "10305d1e-2e11-44e5-8367-9e20af28d22c",
    title: "Blouses for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 2499,
    discount: "",
    rating: 4.5,
    reviewers: 22,
    categoryName: "women"
  },
  {
    _id: "ba870181-9c1a-4a09-94df-9d02f52d6d39",
    title: "Tunics for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 1899,
    discount: 15,
    rating: 4.2,
    reviewers: 18,
    categoryName: "women"
  },
  {
    _id: "8920bf91-c39a-45a6-a3b1-19ebbcf7c4b7",
    title: "Tops for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 1699,
    discount: "",
    rating: 4.6,
    reviewers: 26,
    categoryName: "women"
  },
  {
    _id: "f066b1c3-763f-4a51-89c2-23a7e3b1b220",
    title: "Tank tops for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 999,
    discount: 10,
    rating: 4.4,
    reviewers: 35,
    categoryName: "women"
  },
  {
    _id: "028d4bb1-92ef-4c43-9a18-dc8740b86834",
    title: "Sweaters for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 2399,
    discount: 20,
    rating: 4.8,
    reviewers: 39,
    categoryName: "women"
  },
  {
    _id: "5d30c7bb-2340-44c9-bbb0-d490f8be3019",
    title: "Cardigans for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 2899,
    discount: "",
    rating: 4.5,
    reviewers: 24,
    categoryName: "women"
  },
  {
    _id: "d853a637-d40a-4686-89cb-3a4b4e65e4f7",
    title: "Hoodies for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 2099,
    discount: "",
    rating: 4.4,
    reviewers: 31,
    categoryName: "women"
  },
  {
    _id: "e9de38e9-39e7-4d4a-912e-4ed1b0a1c0fc",
    title: "Sweatshirts for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 1899,
    discount: 15,
    rating: 4.2,
    reviewers: 29,
    categoryName: "women"
  },
  {
    _id: "be120cbe-4da3-409f-942b-ef2a08bc2c8a",
    title: "Jackets for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 2999,
    discount: "",
    rating: 4.6,
    reviewers: 36,
    categoryName: "women"
  },
  {
    _id: "17a06fb3-0670-42e1-8b2f-c7f809d8626e",
    title: "Blazers for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 3699,
    discount: 10,
    rating: 4.7,
    reviewers: 18,
    categoryName: "women"
  },
  {
    _id: "09b9ce27-321a-4c8d-9396-7276359f5b3f",
    title: "Dresses for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 3999,
    discount: "",
    rating: 4.9,
    reviewers: 45,
    categoryName: "women"
  },
  {
    _id: "6e4edf72-c1e0-41b6-8f0b-12db907a0159",
    title: "Skirts for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 1899,
    discount: 20,
    rating: 4.3,
    reviewers: 21,
    categoryName: "women"
  },
  {
    _id: "9485c649-4be7-4f13-b0a5-69f137329de1",
    title: "Jeans for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 2999,
    discount: "",
    rating: 4.6,
    reviewers: 27,
    categoryName: "women"
  },
  {
    _id: "343e54f3-06fc-47d2-b8e3-4331c7d3b64a",
    title: "Shorts for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 1499,
    discount: 10,
    rating: 4.2,
    reviewers: 23,
    categoryName: "women"
  },
  {
    _id: "12774e4a-6fc4-4e25-ae92-2a04512df313",
    title: "Leggings for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 1299,
    discount: "",
    rating: 4.4,
    reviewers: 25,
    categoryName: "women"
  },
  {
    _id: "b32fb3cd-24e0-4d7c-9ed2-649513e837f9",
    title: "Jumpsuits for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 2799,
    discount: 15,
    rating: 4.0,
    reviewers: 19,
    categoryName: "women"
  },
  {
    _id: "bb7a6ec9-8b53-4cb4-8f2d-c1f0c5868f9c",
    title: "Rompers for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 2599,
    discount: "",
    rating: 3.9,
    reviewers: 14,
    categoryName: "women"
  },
  {
    _id: "786b1194-d185-4c72-a5d0-bf860f1e5d66",
    title: "Coats for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 3699,
    discount: 10,
    rating: 4.6,
    reviewers: 17,
    categoryName: "women"
  },
  {
    _id: "b496f9aa-2352-4d2d-8901-954ca932582f",
    title: "Pants for Women",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo ut nulla sodales mattis. Sed sodales ligula velit, vel accumsan sapien accumsan in. Quisque consectetur velit nec sagittis fermentum. Sed id venenatis eros, eget maximus risus. Vivamus dictum lacus eget turpis ullamcorper, nec efficitur lectus aliquet.",
    badge: "",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230201/9eLb/63da0967aeb269c651082d34/-288Wx360H-443006708-red-MODEL.jpg", // Leave the image blank for now
    price: 2399,
    discount: "",
    rating: 4.3,
    reviewers: 20,
    categoryName: "women"
  }
];
