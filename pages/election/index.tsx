import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import CandidateCard from "components/Election/CandidateCard";
import Candidate from "@typeDefs/Candidate";
import moment from "moment";
import { useState, useEffect } from "react";
// import styles from '../styles/Home.module.css'

export default function ElectionPage() {
  const  [createdAt, setCreatedAt] = useState(moment());
  const  [expireAt, setExpireAt] = useState(moment().add({days:2}));

  useEffect(() => {
    console.log(expireAt.diff(createdAt, "days"))
  }, []);

  let candidateList:Candidate[] = [
    {id:"1",voted:false, name:"ifechukwu Daniel",image:"images/votePerson.png" },
    {id:"2",voted:false, name:"ifechukwu Daniel",image:"images/votePerson.png" },
    {id:"3",voted:false, name:"ifechukwu Daniel",image:"images/votePerson.png" },
    {id:"4",voted:false, name:"ifechukwu Daniel",image:"images/votePerson.png" },
  ]

  let candidateList2:Candidate[] = [
    {id:"5",voted:false, name:"ifechukwu Daniel",image:"images/votePerson.png" },
    {id:"6",voted:false, name:"ifechukwu Daniel",image:"images/votePerson.png" },
    {id:"7",voted:false, name:"ifechukwu Daniel",image:"images/votePerson.png" },
    {id:"8",voted:false, name:"ifechukwu Daniel",image:"images/votePerson.png" },
  ]

  return (
    <div>
      <PageHeader pageTitle={"Election"} />
      <div className="electioncontent">
        <div className="electioncontentheader">
          <div className="electiotitlediv title">
            <h3 className="electioncontenttitle">Please Select your preferred Candidate.</h3></div>
          <div className="electiotitlediv">
            <img src="images/bi_clock-history.svg"loading="lazy" alt=""  className="clocksvg"/>
            <h4 className="voteendtext">Voting ends in</h4>
            <h4 className="votetimer">01: 23:40</h4>
          </div>
        </div>
        <div className="electioncandidatewrapper">
          <CandidateCard candidateList={candidateList} position={"President"}/>
          <CandidateCard candidateList={candidateList2} position={"Vice President"}/>
        </div>
        <div className="viewresultwrapper">
        <a href="/result" className="viewresultbutton w-inline-block">
          <div className="viewresultbuttontext">View Result</div>
        </a>
      </div>
      </div>
      <Footer />
    </div>
  );
}
