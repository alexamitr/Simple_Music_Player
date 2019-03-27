import React from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router";

class Start extends React.Component {
  state = {
    navigate: false
  };

  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to="/mainlist" push={true} />;
    }

    return (
      <div>
        <div className="jalexIndex">
          <Button
            className="startButton"
            onClick={() => this.setState({ navigate: true })}
          >
            Start
          </Button>
        </div>
      </div>
    );
  }
}

export default Start;
