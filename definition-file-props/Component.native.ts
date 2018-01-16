import * as React from "react";

export interface Props {
    foo: string;
}

export default class Component extends React.Component<Props> {
    foo: string;
}
