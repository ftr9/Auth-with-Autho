import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.log(req.oidc.user);
  if (req.oidc.isAuthenticated()) {
    res.render('index', { user: req.oidc.user });
  } else {
    res.redirect('/login');
  }
});

router.get('/me', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.status(200).json({
      status: 'success',
      user: req.oidc.user,
    });
    return;
  }

  res.status(404).json({
    status: 'error',
    message: 'user is not authenticated',
  });
});

export default router;
