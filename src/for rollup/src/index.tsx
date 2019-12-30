import React, {FC, ReactNode} from "react"
import _ from "lodash";

import styled from 'styled-components';

export interface Props {
    text?: string;
    children?: ReactNode;
}

const Button: FC  = (props: Props) => {
    const s = _.upperCase("Sss");
    return (
        <Container>
            <div className="button">{props.text}-{s}</div>
        </Container>
    )
}

const Container = styled.div`
  text-align: center;
`

export default Button;