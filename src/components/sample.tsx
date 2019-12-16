import React from 'react';

interface Props {
  text: string
}

export default (props: Props) => <p>{props.text}</p>;