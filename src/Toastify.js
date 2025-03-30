import { toast,Bounce } from "react-toastify";

export  const successToast = ((msg ="success toast is missing")=>{

    toast.success(msg, {
        position: "top-right",
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
