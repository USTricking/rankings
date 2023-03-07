import type { Rankings, Ranking } from "../models/Rankings";

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

  public async getRankingsByEvents(): Promise<Record<string, Ranking[]> | null> {
    try {
      const response = await fetch('https://ust-rankings-fetcher.deno.dev/2023/events');
      const rankingsByEvents = await response.json();
      return rankingsByEvents;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
