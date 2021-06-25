import Footer from '@components/Footer';
import CustomHeader from '@components/Header/CustomHeader';
import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';


const StoreItem = () => {
    const [number, setNumber] = useState(1) 

    const handleAddition =()=> setNumber(number+1)

    const handleSubtraction = ()=>{
        if(number!==0)  return setNumber(number-1)
    }


    return (
    <div>
        <CustomHeader/>
        <div className="storepage">
            <div className="storepageitem">
            <div className="storeitemcontent">
                <img src="/images/storeImage.png" loading="lazy" alt="" className="storepageimage"/>
                <div className="storepagecontent">
                <h1 className="storepagetitle">NUASA Pattern Shirt</h1>
                <h3 className="storepageprice">₦2000</h3>
                <div className="storepagedescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
                <div className="checkoutactions">
                    <div className="productcount">
                    <div className="productnumber">
                        <div className="totalproduct">{number}</div>
                    </div>
                    <div className="action">
                        <motion.img onClick={handleAddition} whileTap={{scale:0.7}} src="/images/bx_bx-down-arrow-1.svg" loading="lazy" alt="" className="productup"/>
                        <motion.img onClick={handleSubtraction} whileTap={{scale:0.7}} src="/images/bx_bx-down-arrow.svg" loading="lazy" alt="" className="productup"/>
                    </div>
                    </div>
                    <motion.a whileTap={{scale:0.7}} className="addtocart w-button">Add to cart</motion.a>
                </div>
                </div>
            </div>
            </div>
            <div className="morestoreitemwrapper">
            <div className="morestoreitem">
                <h2 className="youmaylike">You May Also Like</h2>
                <div className="storegridlist moreitems">
                <a href="#" className="storeitem-2 w-inline-block">
                    <img src="/images/shopImage2.png" loading="lazy" srcSet="images/shopImage2-p-500.png 500w, /images/shopImage2.png 637w" sizes="(max-width: 767px) 43vw, (max-width: 991px) 25vw, 26vw" alt="" className="storeitemimage"/>
                    <div className="storeitemlink">NUASA Pattern Shirt</div>
                    <div className="storeitemprice">2000 NGN</div>
                </a>
                <a href="#" className="storeitem-2 w-inline-block"><img src="/images/shopImage2.png" loading="lazy" srcSet="images/shopImage2-p-500.png 500w, /images/shopImage2.png 637w" sizes="(max-width: 767px) 43vw, (max-width: 991px) 25vw, 26vw" alt="" className="storeitemimage"/>
                    <div className="storeitemlink">NUASA Pattern Shirt</div>
                    <div className="storeitemprice">2000 NGN</div>
                </a>
                <a href="#" className="storeitem-2 mobile w-inline-block"><img src="/images/shopImage2.png" loading="lazy" srcSet="images/shopImage2-p-500.png 500w, /images/shopImage2.png 637w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 25vw, 26vw" alt="" className="storeitemimage"/>
                    <div className="storeitemlink">NUASA Pattern Shirt</div>
                    <div className="storeitemprice">2000 NGN</div>
                </a>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default  StoreItem;
