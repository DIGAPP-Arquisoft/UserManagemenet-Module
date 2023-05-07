
import express from 'express'
import morgan from 'morgan';
import pkg from "../package.json" assert { type: "json" };
import userRoutes from './routs/user.routes.js'
import authRoutes from './routs/auth.routes.js'

const app = express()

app.set('pkg', pkg)
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/user', userRoutes)
app.use('/auth', authRoutes)

export default app;

