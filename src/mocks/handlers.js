import { rest } from 'msw'

export const handlers = [
  rest.post('/api/auth/register', (req, res, ctx) => {
    const { name, email, password } = req.body

    if (password.length < 8) {
      return res(ctx.status(400), ctx.json({ message: 'Password minimal 8 karakter' }))
    }

    return res(
      ctx.delay(150),
      ctx.status(201),
      ctx.json({
        user: { id: 1, name, email },
        token: 'mock-jwt-token',
      }),
    )
  }),
]
