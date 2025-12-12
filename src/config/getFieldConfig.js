// Utility to fetch field configuration by ID.

import { formFields } from "./formFields";

export const getFieldConfig = (id) => {
    return formFields.find((field) => field.id === id);
};
