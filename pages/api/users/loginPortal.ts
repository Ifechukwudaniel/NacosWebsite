import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs'
import randomAgent from 'random-useragent'
import cheerio from 'cheerio';
import imageUploadBase64 from "@utils/imageUploadBase64";
import { User } from "@models/index";
import {IUser} from '@models/User'

export default async function loginPortal (req: NextApiRequest, res: NextApiResponse) {
    if(req.method!=="POST") return  res.status(500).send({ status:500, message:" Request was not found"} )
    let {matricNumber, password} :{matricNumber:string , password:string} = req.body
    matricNumber =matricNumber.toUpperCase();
    if(!matricNumber && matricNumber.length > 0) return res.status(500).send({ status:500, message:"Empty Matric Number"})
    if(!password && password.length > 0) return res.status(500).send({ status:500, message:"Empty Password Filed"} )
    let data = qs.stringify({ '__VIEWSTATE': '/wEPDwUJNTMzNDU1NzA1D2QWAgIDDxYCHgxhdXRvY29tcGxldGUFA29mZmRkUqof2LAdE4XaTKVxV+vLr66d+Qk=','__VIEWSTATEGENERATOR': 'C2EE9ABB','__EVENTVALIDATION': '/wEdAARd9vtBLyjpHiBYSoOme+1hY3plgk0YBAefRz3MyBlTcHY2+Mc6SrnAqio3oCKbxYainihG6d/Xh3PZm3b5AoMQ9QuH9fLNL5w33RiP/YoinnH+MVI=','txtUserName': matricNumber,'txtPassword': password,'btnLogin': 'Login' });

    const config : AxiosRequestConfig= {
        method: 'post',url: 'https://www.biuportal.net/LogIn.aspx',
        headers: {  'authority': 'www.biuportal.net', 'cache-control': 'max-age=0', 'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"', 'sec-ch-ua-mobile': '?1',  'upgrade-insecure-requests': '1', 'origin': 'https://www.biuportal.net','content-type': 'application/x-www-form-urlencoded',  'user-agent': randomAgent.getRandom(), 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 'sec-fetch-site': 'same-origin', 'sec-fetch-mode': 'navigate', 'sec-fetch-user': '?1', 'sec-fetch-dest': 'document',  'referer': 'https://www.biuportal.net/LogIn.aspx', 'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8', 'cookie': 'ASP.NET_SessionId=ad5xqg2xtlgu3ci2c3m4gvg5; ASP.NET_SessionId=ad5xqg2xtlgu3ci2c3m4gvg5' },
        data:data
    } 

    try {  
        await connectToDatabase()
        let foundUser: IUser =  await  User.findOne({matricNumber:matricNumber.toUpperCase()})
        let loginResponse =  await (await axios(config)).data
        let  $ = cheerio.load(loginResponse)
        let errorMsg = $('#lblErrorMessage').text()
        if(errorMsg || errorMsg.length!==0)  return  res.status(500).send({ status:500, message:errorMsg} )
        if(foundUser)   return  res.json({ message:"Success", user: foundUser})
        config.method="GET"; 
        config.url="https://www.biuportal.net/Students/StudentsDetails.aspx";
        config.data={};
        let responseDetail =  await (await axios(config)).data
        $ = cheerio.load(responseDetail)
        let department = $("#HeaderContent_txtDepartment").val()
        if(department !=="COMPUTER SCIENCE")  return  res.status(500).send({ status:500, message:"Only Computer Science student can login"} )
        let name : string = $("#HeaderContent_lblStudentsName").text()
        let level : number =  parseInt($("#HeaderContent_txtLevel").val().toString())
        let phone:string =  $("#HeaderContent_txtPhoneNumber").val().toString()
        let email:string   = $("#HeaderContent_txtEmail").val().toString()
        let img: string = $("#imgPassport").attr('src').toString()
        let {Location }= await imageUploadBase64(img)
        let address  = $("#HeaderContent_txtContactAddress").val()
        const newUser: IUser = new User({name, level, phone, email,matricNumber,  userImage:Location, address})
        await newUser.save()
        return  res.json({ message:"Success", user: newUser }) 
    } catch (err) {
        res.status(500).send({ status:500, message:err.message} )
    }
}
