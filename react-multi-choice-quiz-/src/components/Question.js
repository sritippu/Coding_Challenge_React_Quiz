import React from 'react';

function Question(props) {

  return (
    <div className="question_container">
      <h4 >{props.title}</h4>
      <h5 >{props.content}</h5>

    </div>
    
  );

}

Question.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired
};

export default Question;
