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
  render() {
    const { className, children } = this.props;
    const ListItem = this.listItems(children);
    return <ul className={className}>{this.listItems(children)}</ul>;
  }
}

export default styled(UnorderedList);
