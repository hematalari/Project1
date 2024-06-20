import React from 'react'
import './Livechat.css'
import { Segment } from 'semantic-ui-react'
import ChatBot from 'react-simple-chatbot'
import { SiChatbot } from 'react-icons/si'


const Livechat = () => {
const steps =[
    {
        id:'greet',
        message:'Hello!, Welcome to our Website',
        trigger:'Ask name'
    },
    {
        id:'Ask name',
        message:'Please enter your name',
        trigger:'waiting1'
    },
    {
        id:'waiting1',
       user:true,
        trigger:'name'
    },
    {
        id:'name',
        message:'Hi {previousValue}, Please select property type',
        trigger:'response'
    },
    {
        id:'response',
        options:[
            {value:"flat" ,label:"flat", trigger:"contact"},
            {value:"independent house" ,label:"independent house", trigger:"contact"},
            {value:"villa" ,label:"villa", trigger:"contact"},
            {value:"Sharing flat" ,label:"Sharing flat", trigger:"contact"},
            {value:"flat" ,label:"flat", trigger:"contact"},
        ]
    },
    {
        id:'contact',
        message:'Please enter your contact number',
        trigger:'waiting3'
    },
    {
        id:'waiting3',
       user:true,
        trigger:'end'
    },
    {
        id:'end',
        message:'Thanks for contacting us we will assist an Agent within 24 hours',
        end:true
    },

]
  return (
    <>
        <Segment floated="right">
        <ChatBot steps={steps} />
        </Segment>
      </>
  )
}

export default Livechat