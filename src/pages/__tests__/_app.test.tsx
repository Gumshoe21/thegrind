import { render, screen } from '@testing-library/react'
import React from 'react'
import App from '@pages/index'

import 'intersection-observer'
window.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>
    },
  }
})

describe('App', () => {
  it('renders a title in the document head', () => {
    render(<App />)
    expect(document.title).toBe('The Grind')
  })
})
