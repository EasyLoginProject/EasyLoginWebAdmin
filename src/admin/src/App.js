import React, { Component } from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { jsonServerRestClient } from 'admin-on-rest';

import { UserList, UserEdit, UserCreate } from './Users';

import UserIcon from 'material-ui/svg-icons/social/person';

const App = () => (
  <Admin title="EasyLogin" restClient={jsonServerRestClient('http://127.0.0.1:8080/admapi')}>
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} icon={UserIcon} />
  </Admin>
);

export default App;
