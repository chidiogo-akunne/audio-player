import React from 'react';
import { Alert } from 'react-native';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';

type GlobalErrorProps = {
  children: React.ReactNode;
};

export default function GlobalErrorBoundary(props: GlobalErrorProps) {
  const { reset } = useQueryErrorResetBoundary();

  function ErrorFallback({ resetErrorBoundary }: any) {
    return (
      <>
        {Alert.alert(
          'Unexpected error occurred',
          `
  Something went wrong 😞😞😞 \nand we sincerely apologize for this. \nWe have reported this to our team!\n Please close the app and start again!
  `,
          [{ text: 'Close', onPress: resetErrorBoundary }]
        )}
      </>
    );
  }

  const errorHandler = (nativeError: Error) => {
    // our exception handler code here
    // E.g. reporting error using sentry
  };

  return (
    <ErrorBoundary
      onReset={reset}
      FallbackComponent={ErrorFallback}
      onError={errorHandler}
    >
      {props.children}
    </ErrorBoundary>
  );
}
