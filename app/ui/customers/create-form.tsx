"use client";
import Link from "next/link";
import { UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { createCustomer } from "@/app/lib/customer-actions";

export default function Form() {
  return (
    <form action={createCustomer}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* customer name */}
        <div className="mb-4">
          <label
            htmlFor="customer-name"
            className="mb-2 block text-sm font-medium"
          >
            customer name:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="customer-name"
                name="customer-name"
                type="text"
                placeholder="eg: Anna Smith"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* customer email */}
        <div className="mb-4">
          <label
            htmlFor="customer-email"
            className="mb-2 block text-sm font-medium"
          >
            customer email:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="customer-email"
                name="customer-email"
                type="text"
                placeholder="eg: anna.smith@gmail.com"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>

      {/* buttons: cancel and submit */}
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Customer</Button>
      </div>
    </form>
  );
}
