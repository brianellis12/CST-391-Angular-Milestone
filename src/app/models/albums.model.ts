import { Track } from './tracks.model';

export interface Entry {
    entryId: number,
    title: string,
    artist: string,
    description: string,
    year: string,
    image: string,
    tracks: Track[]
}
