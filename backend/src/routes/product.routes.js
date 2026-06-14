import { Router } from "express";
import { verifyJwt } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import { createProduct,getAllProducts,getProductById,updateProduct,deleteProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post(
  "/",
  verifyJwt,
  authorizeRoles("SUPER_ADMIN"),
  createProduct,
);

productRouter.get(
  "/",
  verifyJwt,
  getAllProducts,
);

productRouter.get(
    "/:id",
    verifyJwt,
    getProductById
);

productRouter.patch(
    "/:id",
    verifyJwt,
    authorizeRoles("SUPER_ADMIN"),
    updateProduct
);

productRouter.delete(
    "/:id",
    verifyJwt,
    authorizeRoles("SUPER_ADMIN"),
    deleteProduct
);

export default productRouter;

