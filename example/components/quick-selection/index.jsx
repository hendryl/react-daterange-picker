import React from 'react';
import _ from 'underscore';
import Selection from './selection';

const QuickSelection = React.createClass({
  propTypes: {
    dates: React.PropTypes.object,
    onSelect: React.PropTypes.func.isRequired,
  },

  renderSelections() {
    return _.map(this.props.dates, (date, label) => {
      return (
        <Selection key={label}
                   className='quickSelection__selection'
                   onSelect={this.props.onSelect}
                   date={date}
                   label={label} />
      );
    });
  },

  render() {
    return (
      <div className='quickSelection'>
        {this.renderSelections()}
      </div>
    );
  },
});

export default QuickSelection;
