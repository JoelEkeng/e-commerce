import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { img } from "framer-motion/client";
import { Typography, Button } from "@mui/joy";
import { title } from "process";
import { motion } from 'framer-motion';
import { Monitor } from "lucide-react";

export default function ComputingDeals() {
    const list = [
        {
          title: "OLED G8",
          img: "/assets/images/Computing/OLED-G8.png",
          price: 'Save $500 on 32" Odyssey Neo G7 Curved Gaming Monitor',
        },
        {
            title: "Book4 Ultra",
          img: "/assets/images/Computing/Book4.png",
          price: "$Save up to $600 on Galaxy Book4 Ultra",
        },
        {
            title: "Bespoke Range",
              img: "/assets/images/Computing/Neo-G7.png",
            price: 'Save $560 on 32" Odyssey Neo G8',
          },
        {
            title: "Odyssey Neo G8",
          img: "/assets/images/Computing/32-OLED-G8.png",
          price: 'Save $400 on 34" Odyssey Neo G8',
        },
      
        {
            title: "S10 Ultra",
            img: "/assets/images/Mobile/s10-ultra.png",
            price: "Save up to $1,100+ on Galaxy Tab S10 ultra",
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
                  className="w-3/4 object-fill mx-auto"
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
    