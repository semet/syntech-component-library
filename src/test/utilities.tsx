import {
  render,
  type RenderOptions,
  type RenderResult,
} from '@testing-library/react'
import { type ReactElement } from 'react'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => {
  return render(ui, { ...options })
}

export {
  screen,
  waitFor,
  fireEvent,
  within,
  renderHook,
  act,
  cleanup,
  waitForElementToBeRemoved,
} from '@testing-library/react'
export { customRender as render }
