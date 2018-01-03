import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { simpleRestClient, fetchUtils } from 'admin-on-rest';

import { UserList, UserShow, UserEdit, UserCreate } from './Users';

import UserIcon from 'material-ui/svg-icons/social/person';

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   const token = localStorage.getItem('token');
//   options.headers.set('Authorization', `Bearer ${token}`);
//   return fetchUtils.fetchJson(url, options);
// }

//const restClient = jsonServerRestClient('http://127.0.0.1:8080/admapi', httpClient);
const restClient = jsonServerRestClient('/admapi');

const App = () => (
  <Admin title="EasyLogin" restClient={restClient}>
      <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} create={UserCreate} remove={Delete} icon={UserIcon} />
  </Admin>
);

export default App;
