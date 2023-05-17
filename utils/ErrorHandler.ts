import { Request, Response, NextFunction } from 'express';
export default function (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isEmailVerificationError =
    err.name === 'BadRequestError' && err.message.includes('verify your email');

  if (isEmailVerificationError) {
    res.render('verifyEmail');
  } else {
    res.status(500).json({
      status: 'Error',
      message: 'Opps something went wrong . Not your fault !!!!',
    });
  }
}
