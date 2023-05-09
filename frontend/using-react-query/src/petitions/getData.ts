import { z } from 'zod'

// Define el esquema de datos esperado
const DataSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
})

// Define el tipo de los datos
type Data = z.infer<typeof DataSchema>

const DATA_URL = 'https://jsonplaceholder.typicode.com/posts'

export async function getData(dataId: number): Promise<Data[]> {
  const data = await fetch(`${DATA_URL}/${dataId}`)
  const json = await data.json()

  // Intenta analizar los datos y devuelve un valor nulo si falla la validación de Zod
  const parsedData = DataSchema.array().tryParse(json)

  if (parsedData instanceof Error) {
    // Lanza un error personalizado si falla la validación de Zod
    throw new Error(`Error de validación: ${parsedData.message}`)
  }

  return parsedData
}
