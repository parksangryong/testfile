import { create } from 'zustand';

interface ApiCountStore {
  count: number;
  plusCount: (num: number) => void;
}

export const useApiCount = create<ApiCountStore>()(set => ({
  count: 0,
  plusCount: num =>
    set({
      count: num,
    }),
}));

interface ClickCountType {
  count2: number;
  plusCount2: () => void;
  minusCount2: () => void;
}

export const clickCount = create<ClickCountType>()((set, get) => ({
  count2: 0,
  plusCount2: () =>
    set({
      count2: get().count2 + 1,
    }),
  minusCount2: () =>
    set({
      count2: get().count2 - 1,
    }),
}));
