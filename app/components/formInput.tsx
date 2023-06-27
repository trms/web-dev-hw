interface FormInputProps {
  type: string,
  name: string,
  id: string,
  image: string,
  label: string,
  value: string | number,
  handleInputChange: Function,
  required?: boolean,
  min?: string
}

const FormInput = ({ type, name, id, image, label, value, handleInputChange, required = false, min} : FormInputProps) => {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:text-left">
      {image && <img src={image} alt="" /> }
      <label htmlFor={id}>
        {label}
        <input
          className="rounded-3xl p-1"
          id={id}
          name={name}
          required={required}
          type={type}
          min={min}
          value={value}
          onChange={(e) => handleInputChange(e)}
        />
      </label>
    </div>
  )
}

export default FormInput