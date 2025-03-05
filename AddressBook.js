// created contact class
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

// created addressBook array to store the contacts
var addressBook = [];

// function to validate the contacts
function validate(Contact) {
    // defining the regexes
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

    if (!zipRegex.test(Contact.zip) || !phoneRegex.test(Contact.phoneNumber) || !emailRegex.test(Contact.email)) {
        throw "Invalid Contact Information";
    }

    if(!DuplicateCheck(Contact)){
        throw "Duplicate Contact Exists !!!"
    }
    
    return true;
}

// function to add a new contact to the array 
function addContact(contact){
    if(validate(contact)){
        addressBook.push(contact);
        return "Contact Saved !!!";
    }
    return "Invalid Contact !!!";
}

// function to edit a contact by finding by its name
function editContact(existingName, newName) {
    const fullExistingName = existingName.split(" ");
    const existing = addressBook.find(function(contact) {
        return (contact.firstName === fullExistingName[0] && contact.lastName === fullExistingName[1]);
    });

    if(!existing){
        throw "Name Not Found !!!"
    }

    const fullNewName = newName.split(" ");
    existing.firstName = fullNewName[0];
    existing.lastName = fullNewName[1];

    return `Name updated to ${newName}`;
}

// function to delete a contact
function findNameAndDelete(fullName) {
    const fullExistingName = fullName.split(" ");

    const replacable = addressBook.find(function(contact) {
        return (contact.firstName === fullExistingName[0] && contact.lastName === fullExistingName[1]);
    });

    if(!replacable){
        throw "Cannot find contact !!!";
    }
    else{
        console.log("replacable: ")
        console.log(replacable);
    }

    addressBook = addressBook.map(function(contact) {
        if(!(contact.firstName + contact.lastName === replacable.firstName + replacable.lastName)){
            return contact;
        }
    });

    return "Contact Deleted !!!";
}

// function to find the number of contacts in the address book
function numberOfContacts() {
    var totalContacts = addressBook.reduce(function(a,b){return a+1}, 0);
    return totalContacts;
}

// function to ensure no duplicate contacts exist in the array
function DuplicateCheck(contact){
    const existing = addressBook.find(function(cont){
        return (cont.firstName === contact.firstName && contact.lastName === contact.lastName);
    });

    if(!existing) return true;
    return false;
}