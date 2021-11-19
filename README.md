# vaccine_database
Vaccine database website backed by mariadb created by fusakoo and exleyt.
- vaccinedb_backend: created with nodejs, express, mysql, cors
- vaccinedb_frontend: created with react

## How to run 
1. Either git clone or extract the folders from zip
2. Run `npm install` to install all the dependent packages in both directories (`vaccinedb_backend` and `vaccinedb_frontend`)
3. Edit/Create the files that's dependent on the user
 - If you're on OSU's flip server
   - `.env` files are excluded; you'd need to create it locally 
     - Create `.env` in both directories (`vaccinedb_backend` and `vaccinedb_frontend`) with 
       ```
       PORT=XXXX
       HOST=flip1.engr.oregonstate.edu
       ```
       Please update the port number to whatever port on OSU's flip server that's open; it does not have to be on flip1 either. Frontend and backend should have different ports as they'll be running separately.
   - Create `dbconfig.js` file under `vaccinedb_backend/app/config/` with
     ```
     module.exports = {
        HOST: 'classmysql.engr.oregonstate.edu',
        USER: 'cs340_onidid',
        PASSWORD: 'XXXX',
        DB: 'cs340_onidid'
      };
     ```
     Please use your own user and password
   - Update `server.js` file
     ```
     // Make sure to update when testing
      var corsOptions = {
        // This should point to the port/server of the frontend app
        origin: "http://flip1.engr.oregonstate.edu:5540"
      };
     ```
     Update the origin to the flip host + PORT that you've specified in the env file for `vaccinedb_frontend`
     ```
     // set port, listen for requests
      const PORT = process.env.PORT || 5541;
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
      });
     ```
     The 5541 should be updated to whichever port you've specified in the env file for `vaccinedb_backend`
   - Update `vaccinedb_frontend/components/config/pathconfig.js` file
     ```
     URL: 'http://flip1.engr.oregonstate.edu:5541'
     ```
     Update the URL to the flip HOST + PORT that you've specified in the env file for `vaccinedb_backend`
 - If you're on local
   - No need to create `.env` files
   - Update `server.js` file
     ```
     // Make sure to update when testing
      var corsOptions = {
        // This should point to the port/server of the frontend app
        origin: "http://flip1.engr.oregonstate.edu:5540"
      };
     ```
     Update the origin to `http://localhost:3000` (assuming your PORT 3000 is not used)
     ```
     // set port, listen for requests
      const PORT = process.env.PORT || 5541;
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
      });
     ```
     The 5541 should be updated to whatever PORT that's open (e.g. `3001`)
   - Update `vaccinedb_frontend/components/config/pathconfig.js` file
     ```
     URL: 'http://flip1.engr.oregonstate.edu:5541'
     ```
     Update the URL to `http://localhost:` + PORT number you've specified (e.g. `3001` earlier) to listen to requests
5. Import the DDQ file provided to your own OSU server (likely locally) using phpmyadmin
6. Run `npm start` in both directories (vaccinedb_backend and vaccinedb_frontend) 

## Citations
Citation for the following function:

Navigation.js
* Date: 10/22/2021 
* Adapted from:
* Source URL: https://www.w3schools.com/howto/howto_js_topnav.asp
