import { createServer } from 'http'
import next from 'next'
import express from 'express'

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {}).listen(port, () => {})
})
