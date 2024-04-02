// Home.js
import React, {  useState } from 'react'
import "./Home.css"
import I18n from '../../utils/i18n';

function Home() {

    const usersCount = 15;


  return (
    <div>
        <h1> {I18n("welcomeMessage")} </h1>
        <p> {I18n("normalMessage")} </p>
        <h3> {I18n("lastMessage")} </h3>
        <p> {I18n("endMessage")} </p>

        <select  
        defaultValue={localStorage.getItem("lang")}
        onChange={(e) =>{
            localStorage.setItem("lang", e.target.value);
            window.location.reload();
        }}>
            <option>Marathi</option>
            <option>Hindi</option>
            <option>English</option>
        </select>

        <p> {I18n("userStateMessage")} </p>
    </div>
  )
}

export default Home