import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

export default class SearchForm extends Component {
  onSubmit(props) {
    console.log('call actions for train connection search');
  }

  render() {
    const { fields: { departure, arrival, time }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Find Train Connection</h3>

        <div className={`form-group ${departure.touched && departure.invalid ? 'has-danger' : ''}`}>
          <label>Departure</label>
          <input type="text" className="form-control" {...departure} />
          <div className="text-help">
            {departure.touched ? departure.error : ''}
          </div>
        </div>

        <div className={`form-group ${arrival.touched && arrival.invalid ? 'has-danger' : ''}`}>
          <label>Arrival</label>
          <input type="text" className="form-control" {...arrival} />
          <div className="text-help">
            {arrival.touched ? arrival.error : ''}
          </div>
        </div>

        <div className={`form-group ${time.touched && time.invalid ? 'has-danger' : ''}`}>
          <label>Time</label>
          <input type="datetime-local" className="form-control" {...time} />
          <div className="text-help">
            {time.touched ? time.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.departure) {
    errors.departure = 'check departure location';
  }
  if (!values.arrival) {
    errors.arrival = 'check arrival location';
  }
  if(!values.time) {
    errors.time = 'check time selected';
  }

  return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'TrainSearch',
  fields: ['departure', 'arrival', 'time'],
  validate
}, null, null)(SearchForm);
