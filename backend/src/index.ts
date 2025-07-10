import { Hono } from 'hono'
import { UserRouter } from './routes/user'

type Bindings = {
  DATABASE_URL : String;
  JWT_SECRET : String
}
const app = new Hono<{
  Bindings : Bindings
}>()

app.route("/api/v1/user" , UserRouter);
export default app
