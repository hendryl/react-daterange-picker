import React from 'react';

const Selection = React.createClass({
  propTypes: {
    className: React.PropTypes.string.isRequired,
    date: React.PropTypes.object,
    label: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired,
  },

  onSelect() {
    this.props.onSelect(this.props.date);
  },

  render() {
   return (
     <input className={this.props.className}
            type='button'
            onClick={this.onSelect}
            value={this.props.label} />
   )
  }
});

export default Selection;
