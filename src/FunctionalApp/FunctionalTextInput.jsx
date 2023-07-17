

export const FunctionalTextInput= ({label, placeholder, onChange, value, list}) => {
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