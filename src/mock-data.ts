import { Point } from './interfaces/point';

export const mockPoints: Point[] = [
  {
    fixDescription: 'Eglin AFB',
    fixId: 'KVPS',
    id: 1,
    latitude: 'N 30 29.00',
    longitude: 'W 086 31.52',
    pointNumber: '1',
    turnType: 'STTO',
  },
  {
    id: 2,
    latitude: 'N 31 05.67',
    longitude: 'W 088 10.68',
    pointNumber: '2',
    turnType: 'Turn',
  },
  {
    id: 3,
    latitude: 'N 32 04.49',
    longitude: 'W 087 35.98',
    pointNumber: '3',
    turnType: 'Turn',
  },
  {
    id: 4,
    latitude: 'N 32 23.96',
    longitude: 'W 084 43.43',
    pointNumber: '4',
    turnType: 'Turn',
  },
];

// export interface MockPoint {
//   altitudeLevels?: string;
//   altitudeRestrictions?: string;
//   cat1: string;
//   cruiseFlightLevel?: string;
//   fixDescription?: string;
//   fixId?: string;
//   formation?: string;
//   iaf?: string;
//   id: number;
//   kcasMach?: string;
//   latitude?: string;
//   longitude?: string;
//   lowLevel?: string;
//   maxSpeed?: string;
//   overfly?: '' | 'direct' | 'intercept';
//   pointNumber?: string;
//   slats?: string;
//   speedType?: string;
//   techSpeed?: string;
//   time?: string;
//   timeTolerance?: string;
//   timeType?: string;
//   turn?: 'left' | 'right' | '';
//   turnType?: string;
// }

export const mockData = [
  {
    id: 1,
    turnPoint: '1',
    turnType: 'STTO',
    fixId: 'KVPS',
    fixDescription: 'Eglin AFB',
    latitude: 'N 30 29.00',
    longitude: 'W 086 31.52',
    turn: '',
    overfly: 'No',
    cruiseType: '',
    cruiseFlightLevel: '',
    altitudeRestrictions: '',
    altitudeLevels: '',
    maxSpeed: '',
    techSpeed: '',
    speedType: '',
    kcasMach: '',
    time: '',
    timeTolerance: '',
    timeTypeAndIAF: {},
    fix: 'KCHS',
  },
  { id: 2, turnPoint: '2', fix: 'CAKET' },
  { id: 3, turnPoint: '3', fix: 'JEVED' },
];
