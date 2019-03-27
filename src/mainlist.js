import React from "react";
import Titlelist from "./listtitle";
import Songlist from "./songlist";

class MainList extends React.Component {
  render() {
    return (
      <div>
        <Titlelist />
        <Songlist />
      </div>
    );
  }
}
export default MainList;
