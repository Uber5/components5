import React from 'react'
import { ComponentProvider, Head } from 'mdx-go'
import * as components from '../src'
export const Root = props =>
  <ComponentProvider components={components}>
    <Head>
      <title>Components5</title>
    </Head>
    {props.children}
  </ComponentProvider>
