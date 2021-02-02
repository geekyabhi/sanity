import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([
    {
      title: "Person",
      name: "person",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Age",
          name: "age",
          type: "number",
        }
      ]
    },
    {
      title: "Dog",
      name: "dog",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Age",
          name: "age",
          type: "number",
        }
      ]
    }
  ])
})
