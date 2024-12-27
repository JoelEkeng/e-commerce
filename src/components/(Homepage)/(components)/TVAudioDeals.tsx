// @ts-nocheck
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { img } from "framer-motion/client";
import { motion } from 'framer-motion';
import { Typography } from "@mui/joy";

export default function TVAudioDeals() {
    const list = [
        {
          title: "Galaxy OLED S90D",
          img: "/assets/images/Tvs/OLED-S90D.png",
          price: "Save up to $2,100 on OLED S90D",
        },
        {
            title: "Galaxy QLED 4k Q80D",
          img: "/assets/images/Tvs/Qled-Q80D.png",
          price: "Save up to $700 on QLED 4k Q80D",
        },
        {
            title: "Galaxy Neo QLED 8k QN900D",
              img: "/assets/images/Tvs/Samsung-Neo-QLED-8K-QN900D.png",
            price: "Save up to $2,500 on QLED 8k QN900D",
          },
        {
            title: "Galaxy Neo QLED QNX1D",
          img: "/assets/images/Tvs/Neo_Qled.png",
          price: "Save up to $1,850 on Neo QLED QNX1D",
        },
      
        {
            title: "Galaxy Q-series Soundbar",
            img: "/assets/images/Tvs/soundbar.png",
            price: "Save up to $400 on Q-series Soundbar",
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
            <div key={index} className="mt-12 m-auto w-full h-full bg-neutral-100 rounded-2xl p-4">
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