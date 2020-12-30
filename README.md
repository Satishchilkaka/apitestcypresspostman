# apitestcypresspostman
 
1. Import postman collection from postman
2. Run postman colletcions with new man `npm run <postman_collection_name>.json` with -env `-e env.json`
3. Run api test with cypress `yarn/npm cypress run` before running set env variables
4. Run api test with mocha & node `mocha test_name.js` 