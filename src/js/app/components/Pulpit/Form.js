import React from "react";
import Message from "./Message";
import '../../../../scss/app/_form.scss'

export default function Form() {
  return (
    <div className="welcomeFormWrap">
      <div className="welcomeMsgWrap">
        <h1>WItaj,</h1>
        <p>wygląda na to, że jesteś tu pierwszy raz!</p>
      </div>
      <div className="MsgWrap">
        <Message />
      </div>
      <div className="giveNameWrap">
        <p>
          Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację :)
        </p>
      </div>
    </div>
  );
}
