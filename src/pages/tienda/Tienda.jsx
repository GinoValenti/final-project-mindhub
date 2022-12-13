import React from "react";
import CarrouselBestSellers from "../../components/CarrouselBestSellers";
import CarrouselTienda from "../../components/CarrouselTienda08";
import "../tienda/Tienda.css";
import { motion } from 'framer-motion'


export default function Tienda() {
  return (
    <>
    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: { duration: 1}}}>
    <header className="mainTienda08" alt="herotienda">
        <CarrouselTienda></CarrouselTienda>
      </header>

      <article className="mainTienda09">
        <div className="cardBestSeller19"> <h3 className="subtitle09">Iconic Items & Best Sellers.</h3></div>
       
        <CarrouselBestSellers></CarrouselBestSellers>
      </article>

      <div className="sectionTienda09">
        <h3 > <span className="bolder">#</span>Lifestyle</h3>
        <button className="buttonshop08">Shop Now</button>
      </div>
    </motion.div>
    </>
  );
}
