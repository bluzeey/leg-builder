export const initialState = {
    instrument:'future',
    PositionType: 'buy',
    Lots: 1,
    ExpiryKind: null,
    EntryType: null,
    StrikeParameter:null,
    Adjustment:null,
    Multiplier:null,
    LegTrailSL: {
    Type: null | 'Points' | 'Percentage',
    Value: {
    InstrumentMove:0,
    StopLossMove:0
    }
    },
    LegMomentum: {
    Type: null | 'PointsUp' | 'PointsDown',
    Value: 0
    },
    };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'SELECT_FUTURES':
        return {instrument:action.payload.instrument,...state}
      case 'SELECT_OPTIONS':
        return {...action.payload,...state}
      default:
        return state;
    }
  };