import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { contactInfo } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, id, icon, url }) => {
    return (
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
        <a href={url} target="_blank" rel="noreferrer">
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img src={icon} alt={id} className="w-16 h-16 object-contain" />
              <h3 className="text-taupe text-[18px] font-bold text-center">
                {id}
              </h3>
            </div>
        </a>
      </motion.div>
    );
  };

  const Links = () => {
    return (
        <div className="-mt-[6rem]">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Find me online</p>
                <h2 className={styles.sectionHeadText}>My Links</h2>
            </motion.div> 
        <div className="mt-20 flex flex-wrap gap-10">
            {contactInfo.map((linkItem, index) => (
                <ServiceCard key={linkItem.id} index={index} {...linkItem} />
            ))}
        </div>
    </div>
    );
  };

 export default SectionWrapper(Links, 'links');