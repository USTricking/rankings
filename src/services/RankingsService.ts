import type { Rankings } from "../models/Rankings";

export default class RankingsService {

  public async getOverallRankings(): Promise<Rankings | null> {
    try {
      const response = await fetch('https://ust-rankings-fetcher.deno.dev/2023');
      const rankings = await response.json();
      return rankings;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
