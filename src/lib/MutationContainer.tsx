import React, { FunctionComponent } from 'react'
import { Maybe } from 'types/graphql'
import { MutationTuple } from '@apollo/client'

type Props<MutationTuple, DumbProps> = Omit<DumbProps, 'mutate' | 'loading'> & {
  mutationTuple: MutationTuple;
  Dumb: FunctionComponent<DumbProps>;
};

const MutationContainer = function <Data, Variables, DumbProps>({
  mutationTuple,
  Dumb,
  ...props
}: Props<MutationTuple<Data, Variables>, DumbProps>): Maybe<JSX.Element> {
  const [mutate, { loading }] = mutationTuple

  return (
    // REVIEW: I legitimately think the TS warning here is incorrect.
    // There is no way to instantiate this with incorrect props.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Dumb mutate={ mutate as DumbProps['mutate'] } loading={ loading } { ...props } />
  )
}

export default MutationContainer
