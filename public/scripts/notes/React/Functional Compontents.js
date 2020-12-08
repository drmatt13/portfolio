// replace `${i}` --> \`   \$   {i}   \`

const array = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// functional component
import React from 'react';
import PropTypes from 'prop-types';

function FunctionalComponent(props) {
  return (
    <div className="class">
      <div>This is a functional component</div>
      <div>prop: {props.prop}</div>
    </div>
  );
}

FunctionalComponent.defaultProps = {
  prop.prop1: 'Github Finder',
  prop.prop2: 'fab fa-github'
}

FunctionalComponent.propTypes = {
  prop.prop1: PropTypes.string.isRequired,
  prop.prop2: PropTypes.string.isRequired
}

export default FunctionalComponent;`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

];