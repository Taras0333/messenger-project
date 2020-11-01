import React from "react";

export const search = (input) => ({
  type: "SEARCH_PERSON",
  input: input,
  })
export const getContact = (id) => ({
    type: "GET_ID",
    id: id,
    
  })
export const save = (msg, whichContact, date) => ({
      type: "SAVE_MESSAGE",
      message: msg,
      which: whichContact,
      date: date,
    })
export const saveResponse = (msg, whichContact, date, isActive) => ({
      type: "SAVE_RESPONSE",
      message: msg,
      which: whichContact,
      date: date,
    })
    
   
    