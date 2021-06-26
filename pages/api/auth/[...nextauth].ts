import axios , {AxiosError} from 'axios'
import { NextApiRequest } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { IUser} from '@models/User'
import { redirect } from 'next/dist/next-server/server/api-utils'


export default NextAuth({
  // Configure one or more authentication providers
    providers: [
      Providers.Credentials({
        name: 'Credentials',
        credentials: {
          matricNumber: { label: "matricNumber", type: "text" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials : any, req: NextApiRequest) {
          const { matricNumber , password} : { matricNumber :string, password:string} = credentials
          console.log(credentials)
          try {
            let path = `${process.env.NEXTAUTH_URL}/api/users/loginPortal`
            let {user}  = await (await axios.post(`${path}`,{matricNumber, password})).data
            console.log(user)
            user.image= user.userImage
            return user 
          } catch (error :  AxiosError | any ) {
            console.log(error)
            if(!error.response.data.message) throw error
            error.message = error.response.data.message
            throw error
          }
        }
      })
    ],
    database:process.env.DATABASE_URL,
    session: { jwt: true,maxAge: 30 * 24 * 60 * 60, updateAge: 24 * 60 * 60 },
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/login', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
      newUser: null // If set, new users will be directed here on first sign in
    }
})