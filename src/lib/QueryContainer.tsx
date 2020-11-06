import React, { FunctionComponent } from 'react'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'
import { Maybe } from 'types/graphql'
import { ApolloError, QueryResult } from '@apollo/client'

type Props<HookResult, DumbProps> = Omit<DumbProps, 'data'> & {
  hookResult: HookResult;
  Dumb: FunctionComponent<DumbProps>;
  showSpinner?: boolean;
  showError?: boolean;
};

const loadingState = (showSpinner: boolean): Maybe<JSX.Element> => {
  return showSpinner ? <Spinner /> : null
}

const errorState = (
  showError: boolean,
  error?: ApolloError | Error,
): JSX.Element => {
  return <ErrorMessage message={ error?.message } />
}

const QueryContainer = function <HookResult extends QueryResult, DumbProps>({
  hookResult,
  Dumb,
  showSpinner = true,
  showError = true,
  ...props
}: Props<HookResult, DumbProps>): Maybe<JSX.Element> {
  const { data, loading, error } = hookResult

  if (loading) return loadingState(showSpinner)
  if (!data || error) return errorState(showError, error)

  // REVIEW: I legitimately think the TS warning here is incorrect.
  // There is no way to instantiate this with incorrect props.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Dumb data={ data as DumbProps['data'] } { ...props } />
}

export default QueryContainer
