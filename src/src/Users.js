import React from 'react';
import { List, Edit, Create, Filter, Datagrid, SimpleForm, TextInput, DisabledInput, TextField, NumberField, EmailField, EditButton } from 'admin-on-rest';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const UserList = (props) => (
    <List {...props} filters={<UserFilter />}>
        <Datagrid>
            <TextField label="Shortname" source="shortname" />
            <TextField label="User Principal Name" source="principalName" />
            <TextField label="Given Name" source="givenName" />
            <TextField label="Surname" source="surname" />
            <TextField label="Full Name" source="fullName" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.fullName}"` : ''}</span>;
};

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
            <DisabledInput label="Record UUID" source="id" />
            <DisabledInput source="numericID" />
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