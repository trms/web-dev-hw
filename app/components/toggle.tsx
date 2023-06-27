import { useState } from 'react';

interface ToggleProps {
    onChange: Function
}

const Toggle = ({ onChange } : ToggleProps) => {
    const [isToggled, setToggle] = useState(false)

    const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
        onChange(event);
        setToggle(!isToggled)
    }

    return (
        <div className="toggle-btn">
          <input id="needsTranslations" name="needsTranslations" type="checkbox" defaultChecked={isToggled} onChange={handleChange} />
          <span />
        </div>
    )
}

export default Toggle