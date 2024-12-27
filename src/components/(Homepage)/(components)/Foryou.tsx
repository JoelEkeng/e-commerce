import { Typography } from "@mui/joy";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { img } from "framer-motion/client";
import { motion } from 'framer-motion';

export default function Foryou() {
  const list = [
    {
      title: "Galaxy Buds3 Pro",
      img: "/assets/images/GalaxyBud3.png",
      price: "Save up to $100",
      info: "From $199.99 before eligible trade-inᶿ",
    },
    {
      title: '57" Odyssey Neo G9 Dual 4k UHD Curved Gaming Monitor Smart TV',
      img: "/assets/images/gamingmointor.png",
      price: "Save up to $900",
      info: "From $1599.99 before eligible trade-inᶿ",
    },
    {
      title: "Samsung S24 Ultra",
      img: "/assets/images/Mobile/s24-Ultra.png",
      price: "Save up to $450",
      info: "From 699.99 before eligible trade-inᶿ",
    },
    {
      title: '49" Odyssey OLED G955C DQHD Neo Quantum Processor Pro',
      img: "/assets/images/neoQuantumMointor.png",
      price: "Save up to $721",
      info: "From $721 before eligible trade-inᶿ",
    },
    {
        title: "Galaxy Book4 Edge, 14",
        img: "/assets/images/book4.png",
        price: "Save up to $500",
        info: "From $799.99 before eligible trade-inᶿ",
    },
    {
      title: "Portable SSD T7 USB 3.2 1TB",
      img: "/assets/images/Portabledrive.png",
      price: "Save up to $60",
      info: "From $109.99 before eligible trade-inᶿ",
  }
  ];

  const shuffledList = list.sort(() => Math.random() - 0.5);

  return (
    <motion.div className="gap-8 grid grid-cols-1 sm:grid-cols-3"
    animate={{
      x: [0, 25, 100],
      transition: { ease: ['easeIn'], times: [0, 1, 5] },
  }}>
      {shuffledList.map((item, index) => (
        /* eslint-disable no-console */
        <div key={index} className="mt-12 py-8 w-full h-[500px] bg-neutral-100 rounded-2xl">
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")} className="m-auto max-w-[360px]">
          <CardBody className="flex flex-col mx-auto px-4 hover:scale-105">
            <Image
              alt={item.title}
              className=" object-fill w-3/4 mx-auto"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between flex flex-col text-center">
            <Typography level="h4" className="font-bold">{item.title}</Typography>
            <p className="text-blue-600 mt-4 font-bold">{item.price}</p>
            <Typography level="title-sm" className="text-default-500 mt-4 w-72">{item.info}</Typography>
          </CardFooter>
          <div className="flex items-center justify-center m-auto">
                <button className="bg-black text-white rounded-full px-8 py-4 w-full" >Buy Now</button>
          </div>
        </Card>
        </div>
      ))}
    </motion.div>
  );
}
