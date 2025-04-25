import { toast,Bounce } from "react-toastify";

export  const successToast = ((msg ="success toast is missing", position ="top-right")=>{

    toast.success(msg, {
        position: position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

})




