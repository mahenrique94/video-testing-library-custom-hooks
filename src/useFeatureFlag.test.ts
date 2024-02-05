import { describe, it, expect } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useFeatureFlag } from './useFeatureFlag'

describe('Tests for useFeatureFlag custom hook', () => {
  it('Should return true when the feature flag is enabled', async () => {
    const { result } = renderHook(() => useFeatureFlag('counter'))
    
    await waitFor(() => {
      expect(result.current.result).toBeTruthy()
    })
  })

  it('Should return false when the feature flag is disabled', async () => {
    const { result } = renderHook(() => useFeatureFlag('unknown-feature'))
    
    await waitFor(() => {
      expect(result.current.result).toBeFalsy()
    })
  })
})