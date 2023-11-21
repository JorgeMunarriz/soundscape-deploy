import cors from 'cors';
import express, {  Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';
import morgan from 'morgan';
import { albumRoutes, artistRoutes, genreRoutes, playlistRoutes, trackRoutes, userRoutes } from './routes';
import errorHandler from './middlewares/errorHandler';


const app: express.Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false })); // Middleware for parsing form data
app.use(helmet());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));

app.use('/user', userRoutes);
app.use('/playlist', playlistRoutes);
app.use('/track', trackRoutes);
app.use('/genre', genreRoutes);
app.use('/artist', artistRoutes);
app.use('/album', albumRoutes);
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "Welcome to the API world"})
  })
app.use(errorHandler)

export default app;