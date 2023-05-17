import express, { Router, Request, Response } from 'express';
import { requiresAuth } from 'express-openid-connect';
import * as dotenv from 'dotenv';
import * as Path from 'path';

dotenv.config({
  path: Path.join(__dirname, '../config/config.env'),
});

interface IProduct {
  name: string;
  perPrice: number;
}

const products: IProduct[] = [
  {
    name: 'computer',
    perPrice: 150000,
  },
  {
    name: 'phone',
    perPrice: 15000,
  },
  {
    name: 'pant',
    perPrice: 1500,
  },
];

const router: Router = express.Router();
if (process.env.NODE_ENV === 'production') {
  router.get('/products', requiresAuth(), (req: Request, res: Response) => {
    res.status(200).json({
      status: 'success',
      products,
    });
  });
} else {
  router.get('/products', (req: Request, res: Response) => {
    if (!req.oidc.isAuthenticated()) {
      res.status(404).json({
        status: 'error',
        message: 'user is not authenticated',
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      products: products,
    });
  });
}

export default router;
