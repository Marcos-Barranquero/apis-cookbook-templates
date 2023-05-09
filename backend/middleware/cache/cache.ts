import { Request, Response, NextFunction } from 'express'

const PERIOD = 60 * 5 // 5 minutes, in seconds

// middleware cache for express
export function setCache(req: Request, res: Response, next: NextFunction) {
  if (req.method === 'GET') {
    res.set('Cache-control', `public, max-age=${PERIOD}`)
  } else {
    // all other methods than GET
    res.set('Cache-control', `no-store`)
  }

  next()
}

// Call it with app.use(setCache)