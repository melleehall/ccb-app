import React from 'react'

const ContactsContext = React.createContext({
    contacts: [],
    addContact: () => {},
    deleteContact: () => {},
})

export default ContactsContext