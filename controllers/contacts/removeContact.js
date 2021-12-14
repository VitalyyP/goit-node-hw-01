const fs = require("fs/promises");
const path = require("path");

const { readContent } = require("./readContent");

const contactsPath = path.join(__dirname, "..", "..", "db", "contacts.json");

const removeContact = async (contactId) => {
  const contacts = await readContent();
  const result = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(result, null, 2));
  return result;
};

module.exports = { removeContact };
