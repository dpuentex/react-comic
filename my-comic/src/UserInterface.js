import React from "react";
import SubmitForm from "./SubmitForm";
import CollectorButton from "./CollectorButton";

function UserInterfase() {
  return (
    <>
      <div>
        <h2>
          We carry the latest and greatest editions of your favorite comic
          books!
        </h2>
        <h2>Are you a collector?</h2>
        <CollectorButton />

        <h2>Have a special request? Click here to fill out our form</h2>
        <SubmitForm />
      </div>
    </>
  );
}

export default UserInterfase;
