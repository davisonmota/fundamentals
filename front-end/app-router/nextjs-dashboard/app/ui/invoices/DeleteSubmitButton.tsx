'use client'

import { useFormStatus } from "react-dom"
import { TrashIcon } from '@heroicons/react/24/outline';
import clsx from "clsx";

export function DeleteSubmitButton(){
  const { pending } = useFormStatus()
  
  return (
    <button type="submit"
      className={clsx(
        'rounded-md border p-2 hover:bg-gray-100', 
        {
          'cursor-wait opacity-50': pending
        }
      )} 
      disabled={pending}
    >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" />
    </button>
  )
}