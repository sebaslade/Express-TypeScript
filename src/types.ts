import { Visibility, Weather } from './enums'

export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'> // Elige que campos utilizar

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'> // Omite los innecesarios
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>