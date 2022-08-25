import * as React from 'react'

interface Props {
    name?: string | number;
    age?: number
    children: React.ReactNode
}

interface Props2 extends Props {
    addres: string
}

type props3 <T = unknown> = T & {surname: string}

const SimpleComponent = (props: React.PropsWithChildren<Props>) => {
    const {name, age} = props;
    const a : props3 <> = {}
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