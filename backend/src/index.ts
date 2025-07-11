import { Hono } from 'hono'
import { UserRouter } from './routes/user'
import { cors } from 'hono/cors';

type Bindings = {
  DATABASE_URL : String;
  JWT_SECRET : String
}
const app = new Hono<{
  Bindings : Bindings
}>()

app.use("/*",cors())


app.route("/api/v1/user" , UserRouter);
export default app
