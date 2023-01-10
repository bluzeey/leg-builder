import { atom } from "recoil";

export const globalAtom = atom({
  key: "global-atom",
  default: {
    instrument: "future",
    PositionType: "buy",
    optionType:"buy",
    Lots: 1,
    ExpiryKind: null,
    EntryType: "Strike Type",
    PremiumRange:null,
    LowerRange:null,
    UpperRange:null,
    StrikeParameter: null,
    Adjustment: null,
    Multiplier: null,
    LegTrailSL: {
      Type: null | "Points" | "Percentage",
      Value: {
        InstrumentMove: 0,
        StopLossMove: 0,
      },
    },
    LegMomentum: {
      Type: null | "PointsUp" | "PointsDown",
      Value: 0,
    },
  },
});

