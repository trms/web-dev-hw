import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function CommonToggle({inputName}: string) {
    const [enabled, setEnabled] = useState(false)

    return (
        <Switch
            name={inputName}
            checked={enabled}
            onChange={setEnabled}
            className={`${
                enabled ? 'bg-primary' : 'bg-white'
            } relative inline-flex h-6 w-14 items-center rounded-full`}
        >
            <span
                className={`${
                    enabled ? 'translate-x-8' : 'translate-x-1'
                } inline-block h-6 w-6 transform rounded-full bg-white border-2 border-primary transition`}
            />
        </Switch>
    )
}
