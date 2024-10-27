import { z } from "zod";

const OrderItemSchema = z.object({
  id: z.number().int(),
  quantity: z.number().int(),
  price: z.number(),
  productid: z.number().int(),
});

const OrderSchema = z.object({
  id: z.number().int(),
  totalamount: z.number(),
  currency: z.string().optional(),
  status: z.string().optional(),
  createdat: z.string().datetime().optional(),
  updatedat: z.string().datetime().optional(),
  order_items: z.array(OrderItemSchema),
});

const UserSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  orders: z.array(OrderSchema),
});

const GetUserResponseSchema = z.object({
  status: z.string(),
  data: UserSchema,
});

type User = z.infer<typeof UserSchema>;
type GetUserResponse = z.infer<typeof GetUserResponseSchema>;
type Order = z.infer<typeof OrderSchema>;
type OrderItem = z.infer<typeof OrderItemSchema>;

export { UserSchema, GetUserResponseSchema, OrderSchema, OrderItemSchema };
export type { User, GetUserResponse, Order, OrderItem };
