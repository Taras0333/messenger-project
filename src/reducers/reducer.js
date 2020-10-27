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
            photo: `../${Alice}`,
            name: "Alice Freeman",
            messages: [
                {
                    from: "Friend",
                    msg: "I need you halp, quick, sent me the docs)))!"
                },
                {
                    from: "Me",
                    msg: "I`m so sorry, I didn`t save them"
                },
                {
                    from: "Frined",
                    msg: "You are the worst!"
                }
                
            ],

        },
        {
            id: 1,
            photo: `../${Josefina}`,
            name: "Josefina",
            messages: [
                {
                    from: "Friend",
                    msg: "Quickly come to the meeting room 1B, we have a big server issue"
                },
                {
                    from: "Me",
                    msg: "I`m heaving breackfast right now, can`t you wait for 10 minutes?"
                },
                {
                    from: "Me",
                    msg: "Will be their as soon as posible."
                },
                {
                    from: "Frined",
                    msg: "We are losing money! Quick!"
                }
            ],
        },
        {
            id: 2,
            photo: `../${Velazquez}`,
            name: "Velazquez",
            messages: [
                {
                    from: "Friend",
                    msg: "Where are you, we have a problem here?"
                },
                {
                    from: "Me",
                    msg: "Can you tell me once more, where is it?)))"
                },
                {
                    from: "Frined",
                    msg: "Quickly come to the meeting room 1B, we have a big server issue"
                }
                
            ],
        },
        {
            id: 3,
            photo: `../${Barrera}`,
            name: "Barrera",
            messages: [
                {
                    from: "Friend",
                    msg: "Hi)"
                },
                {
                    from: "Me",
                    msg: "Hi there) whats`up?"
                },
                {
                    from: "Frined",
                    msg: "Damn good bro, can`t wait the weekend..."
                }
                
            ],
        },
        {
            id: 4,
            photo: `../${Jon}`,
            name: "Jon Hook",
            messages: [
                {
                    from: "Friend",
                    msg: "He told me, he won`t agree on that..."
                },
                {
                    from: "Me",
                    msg: "AHHHH??? Is it posible?"
                },
                {
                    from: "Frined",
                    msg: "Don`t even know what is he thinking..."
                },
                {
                    from: "Frined",
                    msg: "Maybe he know, what he`s doing"
                }
                
            ],
        },
        {
            id: 5,
            photo: `../${Nick}`,
            name: "Nick",
            messages: [
                {
                    from: "Friend",
                    msg: "I`m botherd, whant somthing new("
                },
                {
                    from: "Me",
                    msg: "Don`t even say that to me) HAHAHA)))"
                },
                {
                    from: "Frined",
                    msg: "Have you already bought a new phone? And by the way, nice jacket)"
                }
                
            ],
        }
    
    ],
    myAccount:{
        photo: `../${Anonymous}`,
    },
    findPerson: "",
    whichContact: 1,
    btn: false,
    
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
        msg: action.message
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
         msg: action.message
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