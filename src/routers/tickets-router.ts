import { Router } from 'express';

import { validateBody } from '@/middlewares';
import { ticketsPost } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.post('/', validateBody(createTicketSchema), ticketsPost);

export { ticketsRouter };
