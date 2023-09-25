import { prisma } from '@/config';
import { ticketsRepository } from '@/repositories';


async function getAllTicketTypes() {
  try {
    const ticketTypes = await prisma.ticketsRepository.findByTicket();
    return ticketTypes;
  } catch (error) {
    // Trate erros, por exemplo, log ou lance uma exceção personalizada
    throw new Error('Erro ao buscar os tipos de ingresso');
  }
}

export const ticketTypeService = {
  getAllTicketTypes,
};