

export const FunctionalPhoneInput = ({type, id, placeholder, value, onChange, reference}) => 
{
   return (
         <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={reference}
         />
   );
   
}