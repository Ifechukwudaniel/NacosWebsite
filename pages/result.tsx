import Head from 'next/head'
import Image from 'next/image'
import CustomHeader from '../components/Header/CustomHeader'
import ResultCard from '../components/Result/ResultCard'
// import styles from '../styles/Home.module.css'

export default function ResultPage() {
  return (
        <div>
            <CustomHeader/>
            <div className="resulttitlewrapper">
            <div className="titleresultdiv">
                <h1 className="electioncontenttitle result">Live Results</h1>
                <img src="images/clock.svg" loading="lazy" alt="" className="clocksvg"/>
            </div>
            <div className="titleresultdiv year">
                <div className="text-block-5">2020/2021 Elections</div>
                </div>
            </div>
            <div className="resultcontent">
                <ResultCard position="President"/>
            </div>
        </div>
  )
}
