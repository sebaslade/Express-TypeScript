"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const diaryEntries = [
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
        "weather": types_1.Weather.Rainy,
        "visibility": types_1.Visibility.Great,
        "comment": "Everything went better than expected, I'm learning much"
    },
    {
        "id": 3,
        "date": "2017-04-15",
        "weather": types_1.Weather.Sunny,
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
];
exports.default = diaryEntries;
