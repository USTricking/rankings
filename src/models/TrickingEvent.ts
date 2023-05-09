export interface TrickingEvent {
  readonly name: string;
  readonly tier: number;
}

interface TierGradients {
  readonly [key: number]: string;
}

export const tierGradients: TierGradients = {
  1: 'linear-gradient(135deg, #ffe259 10%, #ffa751 100%)',
  2: 'linear-gradient(135deg, #cfd9df 10%, #e2ebf0 100%)',
  3: 'linear-gradient(135deg, #c79081 10%, #dfa579 100%)'
};