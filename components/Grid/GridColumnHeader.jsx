import React, { Component } from 'react';
import GridItem from './GridItem.jsx';

class GridColumnHeader extends GridItem {
  constructor(props) {
    super(props);
    this.state = { ascending: props.ascending };
    this.sorting = this.sorting.bind(this);
  }

  sorting() {
    this.props.onSorting(this.props.field, !this.state.ascending);
    this.setState({ ascending: !this.state.ascending });
  }

  render() {

    /* Custom Styling config - Start */

    let className = this.props.className ? [...this.props.className] : [];
    let style = Object.assign({}, {}, this.props.style);

    /* Custom Styling config - End */

    /* Custom Content config - Start */

    let content = (
      <div className={className} style={style} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
    if (!this.props.children) {
      let sort = (<span />);
      if (this.props.ascending !== undefined && this.props.onSorting) {
        sort = (
          <span className={this.state.ascending ? 'fa fa-caret-up' : 'fa fa-caret-down'} onClick={this.sorting}/>
        );
      }

      content = (
        <div className={className} style={style}>
          <h2 onClick={this.props.onClick}>{this.props.title}{sort}</h2>
        </div>
      );
    }

    /* Custom Content config - End */

    return content;
  }
}

GridColumnHeader.propTypes = {
  column: React.PropTypes.object,
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  field: React.PropTypes.string,
  title: React.PropTypes.string,
  onClick: React.PropTypes.func,
  ascending: React.PropTypes.bool,
  onSorting: React.PropTypes.func
};

export default GridColumnHeader;
