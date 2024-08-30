import { Checkbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

 const CheckboxC = () => {
  const [enabled, setEnabled] = useState(true)

  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="group size-6 rounded-sm bg-black/10 p-1 text-white data-[checked]:bg-blue-600"
    >
      <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
    </Checkbox>
  )
}

export default CheckboxC