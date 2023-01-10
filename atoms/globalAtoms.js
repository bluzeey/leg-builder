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
    LegTrailSLType:null | "Points" | "Percentage",
    LegTrailSLInstrumentMove:0,
    LegTrailSLStopLossMove:0,
    LegMomentumType:null | "PointsUp" | "PointsDown",
    LegMomentumValue:0
  },
});

