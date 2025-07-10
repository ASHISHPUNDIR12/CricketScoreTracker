import z, { email } from "zod"
export const signupInput = z.object({
    name : z.string().optional(),
    email : z.string().email(),
    password : z.string()
})
export const signinInput = z.object({
    email : z.string().email(),
    password : z.string()
})



export type SignupInput  = z.infer<typeof signupInput>;
export type SigninInput  = z.infer<typeof signinInput>;