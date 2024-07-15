import { database } from "../database";

export async function getProductByName(name: string) {
  return database.query.products.findFirst({
    where: (products, { eq }) => eq(products.name, name),
  });
}
