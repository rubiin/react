import { create } from 'zustand'

interface FishState {
  fishes: number
  increase: (by: number) => void
}

export const usefishStore = create<FishState>()((set) => ({
  fishes: 0,
  increase: (by) => set((state) => ({ fishes: state.fishes + by })),
}))
