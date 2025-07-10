import { PrismaClient } from "../generated/prisma/edge";
import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@ashu777/cricket-common";
export const UserRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string;
        JWT_SECRET : string;
    };

}>()
// signup
UserRouter.post("/signup", async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json()

    // zod validation 
    const {success} = signupInput.safeParse(body)

    if(!success){
        c.status(402)
        return c.json({
            msg : "incorrect inputs"
        })
    }
    // check if user i an existing user 
   try{
     const existingUser = await prisma.user.findUnique({
        where:{
            email : body.email
        }
    })
    if(existingUser){
        c.status(400);
        return c.json({
            error : "user already exist"
        })
    }

    const user = await prisma.user.create({
        data:{
            name : body.name,
            email : body.email,
            password : body.password
        }
    })
    const token = await sign({id : user.id}, c.env.JWT_SECRET)
    return c.json({
        token : token ,
        msg : "sign up succesful"
    });
   }catch(error){
        c.status(401)
        return c.json({
            error : "something went wrong",
             details: error instanceof Error ? error.message : "Unknown error",
        })
   }
})
//signin 
UserRouter.post("/signin", async (c)=>{
     const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate());

     const body = await c.req.json();
     const {success} = signinInput.safeParse(body)
     if(!success){
        c.status(403)
        return c.json({
            msg : "incorrect inputs"
        })
     }
     try{
        const user = await prisma.user.findUnique({
            where: {
                email : body.email
            }
        })
        if(!user || user.password!==body.password){
            c.status(403)
            return c.json({
                error : "invalid credentials"
            })
        }
        const jwt = await sign({id : user.id},c.env.JWT_SECRET)
        return  c.json({
            msg : "sign in succesful",
            jwt : jwt
        })
     }catch(error){
        c.status(403)
        return c.json({
            msg : "something went wrong",
            error : error

        })
     }
})