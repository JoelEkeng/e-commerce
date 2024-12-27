// @ts-nocheck
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { img } from "framer-motion/client";
import { Typography, Button } from "@mui/joy";
import { title } from "process";
import { motion } from 'framer-motion';

export default function HomeAppliancesDeals() {
    const list = [
        {
          title: "Bespoke Refrigerator",
          img: "/assets/images/Appliances/AIRefrigerator.png",
          price: "$1,500 off Bespoke Refrigerator with AI Family Hub+",
        },
        {
            title: "Bespoke Laundry",
          img: "/assets/images/Appliances/Machine.png",
          price: "$1,100 off Bespoke Laundry All-in-one",
        },
        {
            title: "Bespoke Range",
              img: "/assets/images/Appliances/Range.png",
            price: "$900 off Bespoke Range",
          },
        {
            title: "Laundry Set",
          img: "/assets/images/Appliances/Laundryset.png",
          price: "$800 off Bespoke Laundry Set",
        },
      
        {
            title: "Bespoke Refrigerator",
            img: "/assets/images/Appliances/4-door-fridge.png",
            price: "$1,100 off 4 door Bespoke Refrigerator",
        },
      ];
    
      return (  
        <motion.div className="columns-2 gap-8 py-8 sm:columns-3"
        animate={{
          x: [0, 25, 0],
          transition: { ease: ['easeIn'], times: [0, 1, 5] },
      }}>
          {list.map((item, index) => (
            /* eslint-disable no-console */
            <div className="mt-8 w-full h-full bg-neutral-100 rounded-2xl py-8">
            <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")} className="m-auto max-w-[360px]">
              <CardBody className="mx-auto p-4 hover:scale-105">
                <Image
                  alt={item.title}
                  className="w-full object-fill h-full"
                  radius="lg"
                  shadow="sm"
                  src={item.img}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small text-center">
                <Typography level="h3" className="font-bold text-center">{item.price}</Typography>
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
    