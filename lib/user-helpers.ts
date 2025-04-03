import { NeonQueryFunction } from "@neondatabase/serverless";
import { plansMap } from "./constants";

export async function hasCancelledSubscription(
  sql: NeonQueryFunction<false, false>,
  email: string
) {
  const query =
    await sql`SELECT * FROM users where email = ${email} AND status = 'cancelled'`;

  return query && query.length > 0;
}

export async function doesUserExist(
  sql: NeonQueryFunction<false, false>,
  email: string
) {
  const query = await sql`SELECT * FROM users where email = ${email}`;
  if (query && query.length > 0) {
    return query;
  }
  return null;
}

export async function updateUser(
  sql: NeonQueryFunction<false, false>,
  userId: string,
  email: string
) {
  return sql`UPDATE users SET user_id = ${userId} WHERE email = ${email}`;
}

export function getPlanType(priceId: string) {
  if (priceId === "price_1R94QBDH4OZzQWqxMNLgk9C0") {
    return plansMap[1]; // Return Pro plan
} else if (priceId === "price_1R94PmDH4OZzQWqxwTR3BXkg") {
    return plansMap[0]; // Return Basic plan
}

  const checkPlanType = plansMap.filter((plan) => plan.priceId === priceId);
  return checkPlanType?.[0];
}
