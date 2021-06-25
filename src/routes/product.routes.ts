import { Router } from "express";
const router = Router();

import { getProduct, getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller";

router.get("/all", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
