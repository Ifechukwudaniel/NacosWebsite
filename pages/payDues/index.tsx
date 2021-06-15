import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer';
import CustomHeader from '../../components/Header/CustomHeader';
import DuesForm from '../../components/PayDues/DuesForm';
import DuesHeader from '../../components/PayDues/DuesHeader';
import DuesItem from '../../components/PayDues/DuesItem';
// import styles from '../styles/Home.module.css'

export default function PayDuesPage() {
    return (
        <div>
            <CustomHeader/>
            <div className="profilepagecontainer">
                <h3 className="profilepagetitle payduestitle">Pay Dues</h3>
            </div>
            <div className="paydues">
                <DuesForm/>
                <div className="profilepagecontainer">
                    <h3 className="profilepagetitle payduestitle previouspayments">Previous Payments</h3>
                </div>
            </div>
            <div className="previouspaymentwrapper">
                    <div className="previouspayment">
                        <DuesHeader/>
                        <DuesItem section="2020/2021" amount="3000" date="2 January 2021"/>
                        <DuesItem section="2020/2021" amount="3000" date="2 January 2021"/>
                        <DuesItem section="2020/2021" amount="3000" date="2 January 2021"/>
                        <DuesItem section="2020/2021" amount="3000" date="2 January 2021"/>
                        <DuesItem section="2020/2021" amount="3000" date="2 January 2021"/>
                        <DuesItem section="2020/2021" amount="3000" date="2 January 2021"/>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
