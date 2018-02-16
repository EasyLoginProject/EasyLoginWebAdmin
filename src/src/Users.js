import React from 'react';
import { List, Edit, Create, Filter, Show, SimpleShowLayout, Datagrid, SimpleForm, TextInput, DisabledInput, TextField, ShowButton, Responsive, SimpleList, ReferenceArrayField, ReferenceArrayInput, SelectArrayInput, SingleFieldList, ChipField } from 'admin-on-rest';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const UserList = (props) => (
    <List {...props} filters={<UserFilter />}>
    <Responsive
            small={
                <SimpleList
                    primaryText={record => record.fullName}
                    secondaryText={record => record.principalName}
                    tertiaryText={record => record.shortname}
                />
            }
            medium={
                <Datagrid>
                    <TextField label="Shortname" source="shortname" />
                    <TextField label="User Principal Name" source="principalName" />
                    <TextField label="Given Name" source="givenName" />
                    <TextField label="Surname" source="surname" />
                    <TextField label="Full Name" source="fullName" />
                    <ShowButton />
                </Datagrid>
                }
        />
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.fullName}"` : ''}</span>;
};

export const UserShow = (props) => (
    <Show title={<UserTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="Given Name (First Name)" source="givenName" />
            <TextField label="Surname (Last Name)" source="surname" />
            <TextField label="Full Name (Display Name)" source="fullName" />
            <TextField label="E-mail" source="email" type="email" />
            <TextField label="Shortname (UNIX purpose)" source="shortname" />
            <TextField label="User Principal Name" source="principalName" type="email" />
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

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput label="Given Name (First Name)" source="givenName" />
            <TextInput label="Surname (Last Name)" source="surname" />
            <TextInput label="Full Name (Display Name)" source="fullName" />
            <TextInput label="E-mail" source="email" type="email" />
            <TextInput label="Shortname (UNIX purpose)" source="shortname" />
            <TextInput label="User Principal Name" source="principalName" type="email" />
            <TextInput label="Password" source="clearTextPassword" type="password" />
            <ReferenceArrayInput label="Member of" reference="usergroups" source="memberOf" allowEmpty>
                 <SelectArrayInput optionText="commonName" />
            </ReferenceArrayInput>
            <DisabledInput label="Record UUID" source="id" />
            <DisabledInput label="Record ID" source="numericID" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create title="Create a User" {...props}>
        <SimpleForm>
            <TextInput label="Given Name (First Name)" source="givenName" />
            <TextInput label="Surname (Last Name)" source="surname" />
            <TextInput label="Full Name (Display Name)" source="fullName" />
            <TextInput label="E-mail" source="email" type="email" />
            <TextInput label="Shortname (UNIX purpose)" source="shortname" />
            <TextInput label="User Principal Name" source="principalName" type="email" />
            <TextInput label="Password" source="clearTextPassword" type="password" />
        </SimpleForm>
    </Create>
);