import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function findByTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findByTicket(userId: number) {
  const userTicket = await prisma.ticket.findFirst({
    where: {
      Enrollment: {
        userId: userId,
      },
    },
    include: {
      TicketType: true,
    },
  });

  // if (!userTicket) {
  //   return res.status(404).json({ message: 'Ingresso do usuário não encontrado' });
  // }
  return userTicket;
}

async function create(data: Prisma.TicketUncheckedCreateInput, ticketTypeId: number) {
  const createTicket = await prisma.ticket.create({
    data: {
      status: 'RESERVED',
      ticketTypeId,
      ...data,
    },
    include: {
      TicketType: true,
    },
  });
  return createTicket;
}

export const ticketsRepository = {
  findByTicketTypes,
  findByTicket,
  create,
};
