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
{'comment': `functional component`},
{'js': `import React from 'react';

function FunctionalComponent(props) {
    return (
        <div className="class">
            <div>This is a functional component</div>
            <div>prop: {props.prop}</div>
        </div>
    );
}

export default FunctionalComponent;`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `class component`},
{'js': `import React, { Component } from 'react';

class ClassComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>This is a class component</div>
                <div>prop: {this.props.prop}</div>
            </div>
        );
    }
}

export default ClassComponent;`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'comment': `Component Lifecycle`},
{'js': `import React, { Component } from 'react';

class ClassComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { state: 'state1' };
    }

    componentDidMount() {
        this.setState({ state: 'state2' });
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <div>prop: {this.props.prop}</div>
            </div>
        );
    }

    ClassComponent.defaultProps = {
        props.prop: 'prop'
    }
}

export default ClassComponent;`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

];