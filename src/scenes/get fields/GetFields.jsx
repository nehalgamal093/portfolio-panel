import { Fields } from "../../components/CustomField";

export const getFields = (handleBlur, handleChange, values, title) => {
  switch (title) {
    case "title":
      return (
        <Fields
          name="title"
          values={values.title}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );

    case "description":
      return (
        <Fields
          name="description"
          values={values.description}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );

    case "type":
      return (
        <Fields
          name="type"
          values={values.type}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    case "gitlink":
      return (
        <Fields
          name="gitlink"
          values={values.type}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );

    case "googleplaylink":
      return (
        <Fields
          name="googleplaylink"
          values={values.type}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );

    default:
      return (
        <Fields
          name="title"
          values={values.type}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
  }
};