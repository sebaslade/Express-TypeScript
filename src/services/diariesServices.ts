import { DiaryEntry, Visibility, Weather } from "../types"

const diaryEntries: Array<DiaryEntry> = [
    {
        "id": 1,
        "date": "2017-01-01",
        "weather": "rainy",
        "visibility": "poor",
        "comment": "Pretty scary flight, I'm glad I'm alive"
    },
    {
        "id": 2,
        "date": "2017-04-01",
        "weather": Weather.Rainy,
        "visibility": Visibility.Great,
        "comment": "Everything went better than expected, I'm learning much"
    },
    {
        "id": 3,
        "date": "2017-04-15",
        "weather": Weather.Sunny,
        "visibility": "good",
        "comment": "I'm getting pretty confident although I hit a flock of birds"
    },
    {
        "id": 4,
        "date": "2017-05-11",
        "weather": "cloudy",
        "visibility": "good",
        "comment": "I almost failed the landing but I survived"
    }
]

export default diaryEntries