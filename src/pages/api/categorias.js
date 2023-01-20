// Siempre corre del lado del servidor.
// Usamos API cuando querramos la info en el state y tenerla disponible a mano.

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const categorias = await prisma.categoria.findMany()

  
  res.status(200).json(categorias)
}

