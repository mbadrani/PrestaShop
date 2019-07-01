## Here let's initialize our Puppeteer test

Definition of Done
- architecture
- readme (à mettre à jour si nécessaire)
- package.json
- .git-ignore
- test directory avec script.js (headless first)
- tested locally / docker
- Uimap (POM)
- dockerfile
- travis.yml (ajout de la sanity)

# PrestaShop Functional Tests

# prestashop_linkchecker
This script will prevent the 400 and 500 http error code, by crawling your back office and front office

# How to install your environment

```bash
git clone https://github.com/PrestaShop/PrestaShop/
cd tests/E2E-puppeteer/test/
npm i
```

#### Available command line parameters

| Parameter           | Description      |
|---------------------|----------------- |
| URL                 | URL of your PrestaShop website (default to **http://localhost:8080/admin-dev/**) |
| LOGIN               | LOGIN of your PrestaShop website (default to **demo@prestashop.com**) |
| PASSWD              | PASSWD of your PrestaShop website (default to **prestashop_demo**) |

#### Launch script
If you want to run the Install test you can run the script **check_url_status.js**
## With default values
```
node check_url_status.js
```
## With custom values
```
URL_BO=http://url_of_back-office.com URL_FO=http://url_of_front-office.com LOGIN=youremail@prestashop.com PASSWD=yourpassword node check_url_status.js
```
## Run with docker
```
sudo docker build -t puppetter_linkchecker -f .docker/Dockerfile .
sudo docker run -e URL_BO="http://localhost/prestashop_latest/admin-dev/" -e URL_FO="http://localhost/prestashop_latest/" --network="host" puppetter_linkchecker
```
enjoy ;-)

