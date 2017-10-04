import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import 'moment/locale/ru'

import 'react-day-picker/lib/style.css';

export default class Calendar extends React.Component {
  state = {
    from: null,
    to: null,
  };
  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };
  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  };
  render() {
    const { from, to } = this.state;
    return (
      <div className="calendar">
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from && to &&
          <p>
            You chose from
            {' '}
            {moment(from).format('LL')}
            {' '}
            to
            {' '}
            {moment(to).format('LL')}.
            {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
          </p>
        }
        <DayPicker
          numberOfMonths={1}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
          fixedWeeks
        />
      </div>
    );
  }
}
