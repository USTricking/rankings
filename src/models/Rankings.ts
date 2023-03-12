import type { TrickingEvent } from "./TrickingEvent";

export interface Rankings {
  readonly title: string;
  readonly description: string;
  readonly rankings: Ranking[];
}

export interface Ranking {
  readonly athlete: string;
  readonly points: number;
  readonly events: TrickingEvent[];
  placing?: number;
}