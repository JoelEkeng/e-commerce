import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { img } from "framer-motion/client";
import { Typography } from "@mui/joy";
import { title } from "process";
import { motion } from 'framer-motion';

export default function MobileDeals() {
    const list = [
        {
          title: "Galaxy S10 Ultra",
          img: "/assets/images/Mobile/s10-ultra.png",
          price: "Save up to $1,100 on Galaxy Tab S10 Ultra",
        },
        {
            title: "Galaxy Z Flip 6",
          img: "/assets/images/Mobile/Flip.png",
          price: "Save up to $900+ on Galaxy Z Flip 6",
        },
        {
            title: "Galaxy S24 Ultra",
              img: "/assets/images/Mobile/s24-Ultra.png",
            price: "Save up to $975+ on Galaxy S24 Ultra",
          },
        {
            title: "Galaxy Watch Ultra",
          img: "/assets/images/Mobile/UltraWatch.png",
          price: "Save up to $460+ on Galaxy Watch Ultra",
        },
      
        {
            title: "Galaxy Z Fold 6",
            img: "/assets/images/Mobile/Fold6.png",
            price: "Save up to $1,375+ on Galaxy z Fold 6",
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
            <div key={index} className="mt-8 m-auto w-full h-full bg-neutral-100 rounded-2xl p-4">
            <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")} className="flex flex-col m-auto max-w-[360px]">
              <CardBody className="overflow-visible p-4 hover:scale-105">
                <Image
                  alt={item.title}
                  className="w-3/4 object-cover mx-auto"
                  radius="lg"
                  shadow="sm"
                  src={item.img}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small justify-between flex flex-col text-center">
                <Typography level="h3" className="font-bold">{item.price}</Typography>
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
    