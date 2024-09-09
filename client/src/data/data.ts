// data.ts
import db from '@/drizzle';
import { customers } from '@/drizzle/schema';

export async function createCustomer(email: string, fullname: string, duree: number) {
  try {
    await db.insert(customers).values({
      email,
      fullname,
      duree,
    });
    console.log('Customer created successfully');
  } catch (error) {
    console.error('Error creating customer:', error);
  }
}
