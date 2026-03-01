import { productRepository } from "../src/lib/repositories/product-repository.ts";

(async () => {
  try {
    const products = await productRepository.findAll();
    console.log("fetched count", products.length);
  } catch (err) {
    console.error("error fetching products", err);
  }
})();
