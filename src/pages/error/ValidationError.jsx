import React from "react";

const ValidationError = () => {

    //todo: handleGoToEmail function
 
    const handleGoToEmail=()=>{
        // alert("hi!")

        window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox","_blank")
    }


  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Verify Your Email
            </p>
            <button className="mb-4 mt-5 py-2 px-4 rounded text-lg font-bold font-roboto_font text-white bg-red-500  cursor-pointer" onClick={handleGoToEmail}>
              Go to Email
            </button>

            <p className="font-roboto_font text-[22px]">Once you've verified your email, this page will update automatically.</p>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default ValidationError;
