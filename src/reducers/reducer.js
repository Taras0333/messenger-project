import Anonymous from "../images/anonymous.png";
import Alice from "../images/alice.jpeg";
import Josefina from "../images/josefina.jpeg";
import Velazquez from "../images/valazquez.jpeg";
import Barrera from "../images/barrera.jpeg";
import Jon from "../images/jon.jpeg";
import Nick from "../images/nick.jpeg";


const initialStore = {
    contacts:[
      {
            id: 0,
            photo: Alice,
            name: "Alice Freeman",
            messages: [
                {
                    from: "Friend",
                    msg: "I need you halp, quick, sent me the docs)))!",
                    date: new Date(2020, 9, 14, 13, 32, 44, 0)
                },
                {
                    from: "Me",
                    msg: "I`m so sorry, I didn`t save them",
                    date: new Date(2020, 9, 14, 13, 41, 4, 0),
                },
                {
                    from: "Frined",
                    msg: "You are the worst!",
                    date: new Date(2020, 9, 15, 12, 12, 59, 0),
                }
                
            ],

        },
        {
            id: 1,
            photo: Josefina,
            name: "Josefina",
            messages: [
                {
                    from: "Friend",
                    msg: "Quickly come to the meeting room 1B, we have a big server issue",
                    date: new Date(2020, 9, 13, 12, 54, 3, 0),
                },
                {
                    from: "Me",
                    msg: "I`m heaving breackfast right now, can`t you wait for 10 minutes?",
                    date: new Date(2020, 9, 14, 8, 54, 3, 0),
                },
                {
                    from: "Me",
                    msg: "Will be their as soon as posible.",
                    date: new Date(2020, 9, 14, 10, 3, 58, 0),
                },
                {
                    from: "Frined",
                    msg: "We are losing money! Quick!",
                    date: new Date(2020, 9, 16, 12, 7, 32, 0),
                }
            ],
        },
        {
            id: 2,
            photo: Velazquez,
            name: "Velazquez",
            messages: [
                {
                    from: "Friend",
                    msg: "Where are you, we have a problem here?",
                    date: new Date(2020, 9, 14, 5, 22, 36, 0),
                },
                {
                    from: "Me",
                    msg: "Can you tell me once more, where is it?)))",
                    date: new Date(2020, 9, 16, 8, 2, 40, 0),
                },
                {
                    from: "Frined",
                    msg: "Quickly come to the meeting room 1B, we have a big server issue",
                    date: new Date(2020, 9, 17, 9, 51, 20, 0),
                }
                
            ],
        },
        {
            id: 3,
            photo: Barrera,
            name: "Barrera",
            messages: [
                {
                    from: "Friend",
                    msg: "Hi)",
                    date: new Date(2020, 9, 17, 11, 9, 33, 0),
                },
                {
                    from: "Me",
                    msg: "Hi there) whats`up?",
                    date: new Date(2020, 9, 17, 14, 43, 3, 0),
                },
                {
                    from: "Frined",
                    msg: "Damn good bro, can`t wait the weekend...",
                    date: new Date(2020, 9, 18, 11, 45, 50, 0),
                }
                
            ],
        },
        {
            id: 4,
            photo: Jon,
            name: "Jon Hook",
            messages: [
                {
                    from: "Friend",
                    msg: "He told me, he won`t agree on that...",
                    date: new Date(2020, 9, 17, 12, 54, 3, 0),
                },
                {
                    from: "Me",
                    msg: "AHHHH??? Is it posible?",
                    date: new Date(2020, 9, 17, 15, 5, 34, 0),
                },
                {
                    from: "Frined",
                    msg: "Don`t even know what is he thinking...",
                    date: new Date(2020, 9, 18, 17, 24, 39, 0),
                },
                {
                    from: "Frined",
                    msg: "Maybe he know, what he`s doing",
                    date: new Date(2020, 9, 19, 17, 30, 2, 0),
                }
                
            ],
        },
        {
            id: 5,
            photo: Nick,
            name: "Nick",
            messages: [
                {
                    from: "Friend",
                    msg: "I`m botherd, whant somthing new(",
                    date: new Date(2020, 9, 16, 8, 12, 12, 0),
                },
                {
                    from: "Me",
                    msg: "Don`t even say that to me) HAHAHA)))",
                    date: new Date(2020, 9, 17, 7, 44, 56, 0),
                },
                {
                    from: "Frined",
                    msg: "Have you already bought a new phone? And by the way, nice jacket)",
                    date: new Date(2020, 9, 20, 20, 5, 5, 0),
                }
                
            ],
        }
    
    ],
    myAccount:{
        photo: Anonymous,
    },
    findPerson: "",
    whichContact: 1,
    btn: false,
    nextId: 0,
    
}



const reducer = (store = initialStore, action) => {
switch(action.type){
    case "SEARCH_PERSON": {
        return{
            ...store,
            findPerson: action.input
           
        }
    }
    case "GET_ID": {
        return{
            ...store,
            whichContact: action.id
           
        }
    }
    case "SAVE_MESSAGE": {
       let storeCopy = {
           ...store,
           contacts:[
           ...store.contacts,
         ],
       
    }
    storeCopy.contacts[action.which].messages.push({
        from: "Me",
        msg: action.message,
        date: action.date,
    })
      return{
          ...storeCopy,
      }
         
    }
    case "SAVE_RESPONSE": {
        let storeCopy = {
            ...store,
            contacts:[
            ...store.contacts,
          ],
        
     }
     storeCopy.contacts[action.which].messages.push({
         from: "Friend",
         msg: action.message,
         date: action.date,
     })
       return{
           ...storeCopy,
       }
          
     }
    default:{
        return store
    } 
}
}
export default reducer;