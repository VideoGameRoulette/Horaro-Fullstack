import React, { Fragment } from 'react';
import { useLocation } from "react-router-dom";

import Header from './components/header';
import ListItems from './components/listItems';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  let query = useQuery();
  var id = query.get("id");
  return (
    <Fragment>
      <Header />
      <div className="container h-[860px] bg-slate-700 m-auto overflow-y-scroll">
        <ListItems clientid={id} />
      </div>
    </Fragment>
  );
}

export default App;
