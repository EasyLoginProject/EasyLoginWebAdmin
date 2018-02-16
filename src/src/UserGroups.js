import React from 'react';
import { List, Edit, Create, Filter, Show, SimpleShowLayout, Datagrid, SimpleForm, TextInput, DisabledInput, TextField, ShowButton, Responsive, SimpleList, ReferenceArrayField, ReferenceArrayInput, SelectArrayInput, SingleFieldList, ChipField } from 'admin-on-rest';

const UserGroupFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const UserGroupList = (props) => (
    <List {...props} filters={<UserGroupFilter />}>
    <Responsive
            small={
                <SimpleList
                    primaryText={record => record.commonName}
                    secondaryText={record => record.shortname}
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Shortname" source="shortname" />
                    <TextField label="Common Name" source="commonName" />
                    <ShowButton />
                </Datagrid>
                }
        />
    </List>
);

const UserGroupTitle = ({ record }) => {
    return <span>UserGroup {record ? `"${record.commonName}"` : ''}</span>;
};

export const UserGroupShow = (props) => (
    <Show title={<UserGroupTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="Common Name" source="commonName" />
            <TextField label="E-mail" source="email" type="email" />
            <TextField label="Shortname (UNIX purpose)" source="shortname" />
            <ReferenceArrayField label="Members" reference="users" source="members">
                <SingleFieldList>
                    <ChipField source="fullName" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField label="Nested groups" reference="usergroups" source="nestedGroups">
                <SingleFieldList>
                    <ChipField source="commonName" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceArrayField label="Member of" reference="usergroups" source="memberOf">
                <SingleFieldList>
                    <ChipField source="commonName" />
                </SingleFieldList>
            </ReferenceArrayField>
            <TextField label="Record UUID" source="id" />
            <TextField label="Record ID" source="numericID" />
        </SimpleShowLayout>
    </Show>
);

export const UserGroupEdit = (props) => (
    <Edit title={<UserGroupTitle />} {...props}>
        <SimpleForm>
            <TextInput label="Common Name" source="commonName" />
            <TextInput label="E-mail" source="email" type="email" />
            <TextInput label="Shortname (UNIX purpose)" source="shortname" />
            <ReferenceArrayInput label="Members" reference="users" source="members" allowEmpty>
                 <SelectArrayInput optionText="fullName" />
            </ReferenceArrayInput>
            <ReferenceArrayInput label="Nested groups" reference="usergroups" source="nestedGroups" allowEmpty>
                 <SelectArrayInput optionText="commonName" />
            </ReferenceArrayInput>
            <ReferenceArrayInput label="Member of" reference="usergroups" source="memberOf" allowEmpty>
                 <SelectArrayInput optionText="commonName" />
            </ReferenceArrayInput>
            <DisabledInput label="Record UUID" source="id" />
            <DisabledInput label="Record ID" source="numericID" />
        </SimpleForm>
    </Edit>
);

export const UserGroupCreate = (props) => (
    <Create title="Create a UserGroup" {...props}>
        <SimpleForm>
            <TextInput label="Common Name" source="commonName" />
            <TextInput label="E-mail" source="email" type="email" />
            <TextInput label="Shortname (UNIX purpose)" source="shortname" />
        </SimpleForm>
    </Create>
);