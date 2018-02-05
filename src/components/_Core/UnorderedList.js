import React, { Children } from "react";
import styled, { withTheme } from "styled-components";
import { Row, Column } from "hedron";

const ListItem = styled.li`
  margin-bottom: 0.05em;
`;

class UnorderedList extends React.Component {
  listItems(children) {
    return children.map((child, i) => {
      return <ListItem key={`ul-${i}-${child}`}>{child}</ListItem>;
    });
  }

  defaultProps = {
    theme: {}
  };

  render() {
    console.log(this.props.theme);
    const { className, children } = this.props;
    return <ul className={className}>{this.listItems(children)}</ul>;
  }
}

const StyledComponent = ({ children, className }) => {
  const listItems = children => {
    return children.map((child, i) => {
      return <ListItem key={`ul-${i}-${child}`}>{child}</ListItem>;
    });

    return <ul className={className}>{listItems(children)}</ul>;
  };
};

StyledComponent.defaultProps = {
  theme: {}
};

export const newUL = withTheme(StyledComponent);

export default styled(UnorderedList);

// export

// export styled(UnorderedList);
