export class AppSettings {
  public static API_ENDPOINT = 'https://192.168.43.145/SurveyAPIs/';
  //public static API_ENDPOINT = 'https://mylocalhostsites.com/SurveyAPIs/survey';
  //public static API_ENDPOINT = 'https://localhost:5001/survey';
  //public static API_ENDPOINT = 'https://localhost:44381/survey';
  public static SURVEY_ENDPOINT = AppSettings.API_ENDPOINT + 'Survey/';
  public static PAGE_ENDPOINT = AppSettings.API_ENDPOINT + 'Page/';
  public static LOGIN_ENDPOINT = AppSettings.API_ENDPOINT + 'Authorize/';
}
