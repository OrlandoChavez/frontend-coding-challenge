import { Speaker } from './speaker';

export interface SpeakersResult {
  results: Speaker[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  }
}
