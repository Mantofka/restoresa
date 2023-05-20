# Restoresa
A university project by KTU students for the Program systems engineering module
# Our team
KTU students of the academic group IFF-1/2:
- Mantas Petrauskas
- Markas Klimovas
- Nojus Stasiūnas
- Dovydas Katinas
# Our project 
Restaurant reservation web application which also features food ordering at the same time.
# Architecture
# Testing
# Installing and Running the Project

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v19.7.0

    $ npm --version
    9.6.5

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install
    $ git clone https://github.com/Mantofka/restoresa.git
    $ cd restoresa
    $ npm install /(or)/ yarn install

    You will also need to clone restoresa-backend if you do not have the ability to host your own backend heroku-api
    $ git clone https://github.com/Mantofka/restoresa-backend.git
    $ cd restoresa-backend
    $ npm install /(or)/ yarn install

## Running the project
    Run dev
    $ npm start /(or)/ yarn start

    Run backend
    $ node server.js

## Simple build for production

    $ npm build /(or)/ yarn build
# Using the project
### Starting off
upon running the project you can choose to
1. use the local site:                        http://localhost:3000/
2. use our implemented and hosted website:    https://restoresa.lt/
### The homepage
  After opening up an instance of the site you are greeted by our homepage
![image](https://github.com/Mantofka/restoresa/assets/127296926/26cf86c4-3b8a-4317-8bf5-25fd7e42e1e3)
#### The navigation menu
![image](https://github.com/Mantofka/restoresa/assets/127296926/2e8c3351-f802-444a-90d4-7a0d41e79cda)
  main way of navigation trhoughout the site is the menu. It contains the following buttons:
-"Restoresa" button (redirects to the main page)
-"Foods" button (Currently unimplemented)
-"Restaurants" button (redirects to the restaurant select page)
-"Profile" or "Sign in" button (used to access the users profile or to sign in)
#### Sign in page
![image](https://github.com/Mantofka/restoresa/assets/127296926/9006151d-c4e9-41e8-ac16-6f9628d0f3c0)
In this screen you can sign in using a "Google" account or "Restoresa" account and also sign up to create a new "Restoresa" user.
#### The Profile page
![image](https://github.com/Mantofka/restoresa/assets/127296926/fa565b0a-53a8-48f4-8dae-3aa5a20a444e)
After logging in you will see the user profile created. The profile contains:
- Full name
- E-mail
- Password (it can be changed)
- Phone number (it can be changed)
- Order history (you can review past orders)
#### Ordering functionality
1. Select a restaurant to dine at:
![image](https://github.com/Mantofka/restoresa/assets/127296926/d944ed90-a70c-421e-8439-e38458a2d8f3)
2. Select number of guests:
![image](https://github.com/Mantofka/restoresa/assets/127296926/a26881d2-086e-440c-833e-bde19591f5f1)
3. Pick date and time:
 ![image](https://github.com/Mantofka/restoresa/assets/127296926/40cf0b1d-b63a-4102-a463-a89b6ab701c7)
4. Select items to be ordered:
![image](https://github.com/Mantofka/restoresa/assets/127296926/b22a3422-c25f-4e5d-9415-6a445cda1910)
5. Review the order and procced to the payment:
![image](https://github.com/Mantofka/restoresa/assets/127296926/a1c4f873-fe61-4f32-98bf-ab5bfa7bf0c1)
#### The payment page
![image](https://github.com/Mantofka/restoresa/assets/127296926/230db7cc-39c6-4d49-90af-93dc8dd0f700)
You can choose:
- To pay with a credit card;
- To pay via "Google Pay".
If you have chosen to pay with card fill out the fiels:
1. Card number;
2. Expiration date;
3. CVC;
4. Country.
Then press the payment button. 
![image](https://github.com/Mantofka/restoresa/assets/127296926/ac092ce3-b49e-41a3-8905-39683cdc3015)
Upon succesfull payment you will see this pop up, that informs the user of the successful payment and prompts to go back to the homepage. The order now appers in the "Profile" section, under the "order history" section.
