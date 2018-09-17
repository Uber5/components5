import React from 'react'
import { ComponentProvider } from 'mdx-go'
import * as components from '../src'
export const Root = props =>
  <ComponentProvider components={components}>
    {props.children}
  </ComponentProvider>
