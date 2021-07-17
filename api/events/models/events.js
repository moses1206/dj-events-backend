const slugify = require("slugify");
const { uuid } = require("uuidv4");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name) {
        data.slug = uuid();
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.name) {
        data.slug = uuid();
      }
    },
  },
};
