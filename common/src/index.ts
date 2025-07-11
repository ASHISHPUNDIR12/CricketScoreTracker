import z from "zod"
export const signupInput = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string().optional()
});
export const signinInput = z.object({
    email : z.string(),
    password : z.string()
})



export type SignupInput  = z.infer<typeof signupInput>;
export type SigninInput  = z.infer<typeof signinInput>;