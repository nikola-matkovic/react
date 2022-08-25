import * as React from 'react'

interface Props {
    name?: string | number;
    age?: number
    children: React.ReactNode
}

const SimpleComponent = (props: Props) => {
    const {name, age} = props;
    return (
        <div>
            {name && <p>{(name  as number)}</p>}
            <p>{age?.toString()}</p> {//ako se stavi ! krešuje
            }
            <p>{props.children}</p>
        </div> 
    );
}

export default SimpleComponent;