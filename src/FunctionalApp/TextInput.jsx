

export const TextInput= ({label, placeholder, onChange, value, list}) => {
   return(
      <>
         <label>{label}:</label>
         <input
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            list={list}
         />
      </>
   )
}