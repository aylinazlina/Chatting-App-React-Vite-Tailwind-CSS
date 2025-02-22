import { Input } from "@material-tailwind/react";
import PropTypes from "prop-types";


export default function InputDefault({type,id,name,className,onChange,onClick}) {
  return(
    <div className="mt-8 w-72 relative">
    <Input
    type={type}
    id={id}
    name={name}
    className={className}
    onChange={onChange}
    label={name}
  />;
  <div className="absolute cursor-pointer" onClick={onClick}>
    {children}
  </div>
  </div>
  );
}

InputDefault.propTypes ={
    name:PropTypes.string.isRequired,
    type:PropTypes.string,
    className:PropTypes.string,
    id:PropTypes.string,
    onclick:PropTypes.func,
    onChange:PropTypes.func,
    children:PropTypes.string,

    


};



