import React, { FunctionComponent } from 'react'
import { Maybe } from 'types/graphql'
import { MutationFunction, MutationTuple } from '@apollo/client'

export interface MutatingComponentProps<Data, Variables> {
  loading: boolean;
  mutate: MutationFunction<Data, Variables>;
}

type Props<Data, Variables, DumbProps> = Omit<
DumbProps,
keyof MutatingComponentProps<Data, Variables>
> & {
  mutationTuple: MutationTuple<Data, Variables>;
  Dumb: FunctionComponent<DumbProps>;
};

const MutationContainer = function <Data, Variables, DumbProps>({
  mutationTuple,
  Dumb,
  ...props
}: Props<Data, Variables, DumbProps>): Maybe<JSX.Element> {
  const [mutate, { loading }] = mutationTuple

  // REVIEW: I legitimately think the TS warning here is incorrect.
  // There is no way to instantiate this with incorrect props.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Dumb mutate={ mutate } loading={ loading } { ...props } />
}

export default MutationContainer
