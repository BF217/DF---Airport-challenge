export abstract class WeatherTS {
  isStormy(): boolean {
    return Math.random() < 0.5;
  }
}

export default WeatherTS;
