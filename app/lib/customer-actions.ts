"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CustomerFormSchema = z.object({
  id: z.string(),
  customerName: z.string(),
  customerEmail: z.string(),
  customer_image_url: z.string().nullable().optional(), // image_url can be null or undefined
});

const CreateCustomer = CustomerFormSchema.omit({ id: true });
export async function createCustomer(formData: FormData) {
  const { customerName, customerEmail } = CreateCustomer.parse({
    customerName: formData.get("customer-name"),
    customerEmail: formData.get("customer-email"),
  });
  // use this image temporily
  const customer_image_url = "/customers/evil-rabbit.png";
  // Test it out:
  //console.log(customerName + " " + customerEmail);
  await sql`
    INSERT INTO customers (name, email, image_url)
    VALUES (${customerName}, ${customerEmail}, ${customer_image_url})
  `;

  revalidatePath("/dashboard/customers");
  redirect("/dashboard/customers");
}
