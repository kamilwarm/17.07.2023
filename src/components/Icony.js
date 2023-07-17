import React from "react";
import styles from './Icony.module.css'
import { FaBomb, FaHeart, FaProjectDiagram, FaStar } from "react-icons/fa";



const Icony = () => {
	return (
    <div className={styles.app}>
    <h1><FaBomb />  </h1>
    <h1><FaStar /></h1>
    <h1><FaHeart style={{color: 'red'}}/></h1>
    <h1><FaProjectDiagram style={{color: 'green'}}/></h1>
    </div>
	);
};

export default Icony;