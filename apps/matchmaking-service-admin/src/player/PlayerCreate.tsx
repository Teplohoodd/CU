import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

export const PlayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
        <NumberInput step={1} label="mmr" source="mmr" />
        <SelectArrayInput
          label="preferredRoles"
          source="preferredRoles"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="queueTime" source="queueTime" />
      </SimpleForm>
    </Create>
  );
};
