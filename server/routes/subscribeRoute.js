import express from 'express';

import { newsubscribe } from '../controllers/subscribeController.js';

const subscribeRouter= express.Router();
subscribeRouter.post('/new',newsubscribe);

export default subscribeRouter;