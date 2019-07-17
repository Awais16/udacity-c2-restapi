import { Router, Request, Response } from 'express';
import { FeedRouter } from './feed/routes/feed.router';
import { UserRouter } from './users/routes/user.router';
import * as AWS from '../../aws';

const router: Router = Router();

router.use('/feed', FeedRouter);
router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

router.get('/bucket-list',
    async (req:Request,res:Response) =>{
        AWS.s3.listBuckets((error,data) =>{
            if(error){
                res.status(500).send(error.stack)
            }else{
                res.status(200).send(data);
            }
        });
    }
);

export const IndexRouter: Router = router;