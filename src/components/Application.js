import React from 'react';

import Users from './Users';
import CreateList from './CreateList';
import Lists from './Lists';

import CreateListContainer from '../containers/CreateListContainer';

import ListsContainer from '../containers/ListsContainer';

const Application = () => {
  return (
    <main className="Application">
      <Users />
      <section>
        {/* <CreateList /> */}
        {/* <Lists /> */}
        <CreateListContainer />
        <ListsContainer />
      </section>
    </main>
  );
};

export default Application;
