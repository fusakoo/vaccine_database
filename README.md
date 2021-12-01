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
       # vaccine_db_backend/.env
       DB_CONN_LIMIT=10
       DB_HOST=classmysql.engr.oregonstate.edu
       DB_USER=cs340_onidid
       DB_PASSWORD=XXXX
       DB_NAME=cs340_onidid
       FRONTEND_URL=http://flipX.engr.oregonstate.edu:{FRONTEND_PORT}
       HOST=flipX.engr.oregonstate.edu
       PORT={BACKEND_PORT}
       ```
       ```
       # vaccine_db_frontend/.env
       REACT_APP_BACKEND_URL=http://flipX.engr.oregonstate.edu:{BACKEND_PORT}
       HOST=flipX.engr.oregonstate.edu
       PORT={FRONTEND_PORT}
       ```
       Please change flipX to whichever flip server you are running on and update the port number to whatever port on OSU's flip server that's open. Frontend and backend should have different ports as they'll be running separately.
 - If you're running locally
   - Update the frontend and backend URLs to `http://localhost:{PORT}` and the HOSTs to `localhost`
5. Import the DDQ file provided to your own OSU server (likely locally) using phpmyadmin
6. Run `npm start` in both directories (vaccinedb_backend and vaccinedb_frontend) 

## Citations
Citation for the following function:

Navigation.js
* Date: 10/22/2021 
* Adapted from:
* Source URL: https://www.w3schools.com/howto/howto_js_topnav.asp
