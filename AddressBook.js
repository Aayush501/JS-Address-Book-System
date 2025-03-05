class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

const addressBook = [];

function validate(Contact) {
    const nameRegex = /^[A-Z][a-z]{3,}/;
    const addressRegex = /^.{4,}/;
    const zipRegex = /^\d{6}$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!nameRegex.test(Contact.firstName) || !nameRegex.test(Contact.lastName)) {
        throw "Name Not Valid !!!";
    }

    if (!addressRegex.test(Contact.address) || !addressRegex.test(Contact.city) || !addressRegex.test(Contact.state)) {
        throw "Address Not Valid";
    }

    if (!zipRegex.test(Contact.zip)) {
        throw "Invalid Contact Information";
    }
    
    if( !phoneRegex.test(Contact.phoneNumber) ){
        throw "Invalid Contact Information2";
    }
    
    if(!emailRegex.test(Contact.email)){
        throw "Invalid Contact Information3";
    }
    
    return true;
}

function addContact(contact){
    if(validate(contact)){
        addressBook.push(contact);
        return "Contact Saved !!!";
    }
    return "Invalid Contact !!!";
}