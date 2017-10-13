import React from 'react';

function QuestionCount(props) {

  return (
    <div className="questionCount">
      <div className="countBack">
        <a 
          onClick={props.onBackSelected}>
          <img
          src="/src/img/prev.jpg" alt="Back Button"
          />
        </a>
      </div>
      <div className="countIndicator">
        Question <span>{props.counter}</span> of <span>{props.total}</span>
      </div>
    </div>
  );

}

QuestionCount.propTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired,
  onBackSelected: React.PropTypes.func.isRequired
};

export default QuestionCount;
