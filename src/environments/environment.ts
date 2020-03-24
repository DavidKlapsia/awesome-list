// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyABq2uAd1AerBWdhoAudZtaBrUVzjQAF_A",
    authDomain: "awesome-list-5ad9d.firebaseapp.com",
    databaseURL: "https://awesome-list-5ad9d.firebaseio.com",
    projectId: "awesome-list-5ad9d",
    storageBucket: "awesome-list-5ad9d.appspot.com",
    messagingSenderId: "123948106430",
    appId: "1:123948106430:web:0ede6d181d7c776f0b94ef",
    auth: {
			baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
		},
    firestore: {
			baseURL : 'https://firestore.googleapis.com/v1/projects/awesome-list-5ad9d/databases/(default)/documents'
		}
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
