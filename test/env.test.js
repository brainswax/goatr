/* eslint-env jest */
import * as cenv from 'custom-env'

cenv.env(process.env.NODE_ENV)

describe('Test environment variables', () => {
  it('Ensure required variables exist', () => {
    expect(process.env.SLACK_HOOK).toBeDefined()
    expect(process.env.RESTART_FILE).toBeDefined()
  })
})
