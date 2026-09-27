const FORM_TYPE_BY_QUERY = {
  "automation-fix-sprint": "automation-fix-sprint",
  "custom-project": "custom-project",
  "lead-to-hubspot": "lead-to-hubspot",
  "phone-receptionist": "phone-receptionist"
};

export function resolveProjectIntakeType(query) {
  const requestedType = query?.type;
  if (requestedType === undefined) {
    return { formType: "custom-project", unsupported: false };
  }

  if (typeof requestedType !== "string" || !FORM_TYPE_BY_QUERY[requestedType]) {
    return { formType: null, unsupported: true };
  }

  return { formType: FORM_TYPE_BY_QUERY[requestedType], unsupported: false };
}
