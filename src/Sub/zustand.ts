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
  fifCount2: () => void;
  fifmCount2: () => void;
}

export const clickCount = create<ClickCountType>()((set, get) => ({
  count2: 1,
  plusCount2: () =>
    set({
      count2: get().count2 + 1,
    }),
  minusCount2: () =>
    set({
      count2: get().count2 - 1,
    }),
  fifCount2: () =>
    set({
      count2: get().count2 + 5,
    }),

  fifmCount2: () =>
    set({
      count2: get().count2 - 5,
    }),
}));

interface ClickCount2Type {
  count3: number;
  plusCount3: () => void;
  minusCount3: () => void;
  fifCount3: () => void;
  fifmCount3: () => void;
}

export const clickCount2 = create<ClickCount2Type>()((set, get) => ({
  count3: 1,
  plusCount3: () =>
    set({
      count3: get().count3 + 1,
    }),
  minusCount3: () =>
    set({
      count3: get().count3 - 1,
    }),
  fifCount3: () =>
    set({
      count3: get().count3 + 5,
    }),

  fifmCount3: () =>
    set({
      count3: get().count3 - 5,
    }),
}));

interface ClickCount3Type {
  count4: number;
  plusCount4: () => void;
  minusCount4: () => void;
  fifCount4: () => void;
  fifmCount4: () => void;
}

export const clickCount3 = create<ClickCount3Type>()((set, get) => ({
  count4: 1,
  plusCount4: () =>
    set({
      count4: get().count4 + 1,
    }),
  minusCount4: () =>
    set({
      count4: get().count4 - 1,
    }),
  fifCount4: () =>
    set({
      count4: get().count4 + 5,
    }),

  fifmCount4: () =>
    set({
      count4: get().count4 - 5,
    }),
}));

interface ClickCount4Type {
  count5: number;
  plusCount5: () => void;
  minusCount5: () => void;
  fifCount5: () => void;
  fifmCount5: () => void;
}

export const clickCount4 = create<ClickCount4Type>()((set, get) => ({
  count5: 1,
  plusCount5: () =>
    set({
      count5: get().count5 + 1,
    }),
  minusCount5: () =>
    set({
      count5: get().count5 - 1,
    }),
  fifCount5: () =>
    set({
      count5: get().count5 + 5,
    }),

  fifmCount5: () =>
    set({
      count5: get().count5 - 5,
    }),
}));
