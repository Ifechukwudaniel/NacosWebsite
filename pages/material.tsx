import MaterialItem from '@components/material/materialItem'
import { Material, IMaterial } from '@models/Material'
import axios from 'axios'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import CustomHeader from '../components/Header/CustomHeader'

// import styles from '../styles/Home.module.css'

export default function MaterialPage(props: {materials:IMaterial[]}) {
    const [materialsList , setMaterialList] = useState(props.materials)
    return (
            <div>
                <CustomHeader/>
                <div className="duescontent">
                    <div className="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" className="serchduesform">
                            <input type="text" className="searchrecods w-input"  name="records"  placeholder="Search Material" id="records"/>
                            <motion.div whileTap={{scale:0.8}} className="searchrecods icon">
                                <img src="images/search.png" loading="lazy" width="16" alt="" className="searchiocn"/>
                            </motion.div>
                        </form>
                    </div>
                </div>
                <div className="materiallistwrapper">
                    <div className="materiallist">
                        {
                            materialsList.map((x, i)=>(
                                <MaterialItem {...x} key={i}/>
                            ))
                        }
                    </div>
                </div>
        </div>
        )
}

export async function getServerSideProps() {
    const materials: IMaterial[] = await (await axios(`${process.env.URL}/api/material`)).data
    return {
        props: {materials},
    };
}