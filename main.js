class Contact {
    constructor(name, wsp, desc) {
      this.name = name;
      this.wsp = wsp;
      this.desc = desc;
    }
  }
 
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

const getAll = () => {
    return contacts;
  };
const create = (newContact) => {
    contacts.push(newContact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };


const nameInput = $("#name-input");
const numberWsp = $("#number-wsp");
const description = $("#description");
const btnEnviar = $(".btn btn-primary");
const contactList = $("contact-list");



$("#enviarBtn").on("click", function () {
    const nombre = nameInput.value;
    const numero = numberWsp.value;
    const descripcion = description.value;

    const contact = new Contact (nombre, numero, descripcion);
    create (contact);
    console.log (getAll()); 
}
)
for (let contact of contacts) {
    console.log(contact);
    $("#contact-list").prepend(`<li>Nombre: ${contact.name} </li> <li> Tel: ${contact.wsp} </li>`);
}


