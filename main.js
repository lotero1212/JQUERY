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
  const nombre = nameInput[0].value;
  const numero = numberWsp[0].value;
  const descripcion = description[0].value;

  const contact = new Contact(nombre, numero, descripcion);
  create(contact);
  console.log(getAll());
});
for (let contact of contacts) {
  console.log(contact);
  $("#contact-list").prepend(
    `<tr><td> ${contact.name} </td> <td> ${contact.wsp} </td> <td> ${contact.desc}</td></tr>`
  );
}

$("#mostrarBtn").click(function () {
  $("#lista-contactos").fadeIn(500);
  $("#mostrarBtn").hide(1000);
  $("#ocultarBtn").show(1000);
});

$("#ocultarBtn").click(function () {
  $("#lista-contactos").fadeOut(500);
  $("#ocultarBtn").hide(1000);
  $("#mostrarBtn").show(1000);
});
