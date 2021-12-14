const { readContent } = require("./readContent");

const getContactById = async (contactId) => {
  const contacts = await readContent();
  const result = contacts.filter((contact) => contact.id === contactId);
  return result;
};

module.exports = { getContactById };
