
import express, { Express, Request, Response, NextFunction } from "express";
import categoryRoute from './routers/category.route';
import createError from "http-errors";
import cors from 'cors'
import path from "node:path";
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* Cấu hình nhận thư mục public là thư mục chứa tài nguyên tĩnh */
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors({ origin: '*' }));


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Express + TypeScript Server" });
});

app.use('/api/v1/categories', categoryRoute);




// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  const statusCode = err.status || 500;
  res.status(statusCode).json({ statusCode: statusCode, message: err.message });
});
export default app