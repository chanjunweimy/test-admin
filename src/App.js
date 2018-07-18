import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

class App extends Component {
  render() {
    return (
      <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}  icon={PostIcon}  />
        <Resource name="users" list={UserList} icon={UserIcon} />
      </Admin>
    );
  }
}

export default App;
