import React, { Component } from 'react';

class GridItem extends Component {
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
      content = (
        <div className={className} style={style}>
          <p onClick={this.props.onClick}>{this.props.value}</p>
        </div>
      );
    }

    /* Custom Content config - End */

    return content;
  }
}

GridItem.propTypes = {
  item: React.PropTypes.object,
  className: React.PropTypes.array,
  style: React.PropTypes.object,
  value: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default GridItem;
