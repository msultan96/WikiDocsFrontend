// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const HOSTNAME: string = "localhost";
const PORT_NUMBER: number = 8080;
const APPLICATION_NAME: string = '/DLM_Wiki';

//'+PORT_NUMBER+'
export const environment = {
  production: false,
  userAPIUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/UserAPI',
  articleAPIUrl: 'http://' + HOSTNAME + ':' + PORT_NUMBER + APPLICATION_NAME + '/ArticleAPI',
};