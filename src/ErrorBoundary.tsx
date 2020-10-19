import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Notifier } from '@airbrake/browser'

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component {
  public state: State;
  private airbrake: Notifier;

  constructor(props: Record<string, unknown>) {
    super(props)
    this.state = { hasError: false }
    this.airbrake = new Notifier({
      projectId: 307852,
      projectKey: '449beed3c57709fc0de1702d0df295c4',
    })
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // Display fallback UI
    this.setState({ hasError: true })
    if (process.env.NODE_ENV === 'development') {
      console.error('ERROR:', error, info)
    } else {
      // Send error to Airbrake
      this.airbrake.notify({
        error: error,
        params: { info: info },
      })
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
