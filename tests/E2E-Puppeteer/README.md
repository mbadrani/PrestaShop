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
| URL_BO              | URL of your PrestaShop website Back Office (default to **http://localhost:8080/admin-dev/**) |
| URL_FO              | URL of your PrestaShop website Front Office (default to **http://localhost:8080/**) |
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
URL_BO="Your_Shop_URL_BO" URL_FO="Your_Shop_URL_FO" LOGIN="Your_Login" PASSWD="Your_Password" node check_url_status.js
```
## Run with docker
```
sudo docker build -t puppeteer_linkchecker -f .docker/Dockerfile .
sudo docker run -e URL_BO="Your_Shop_URL_BO" -e URL_FO="Your_Shop_URL_FO" LOGIN="Your_Login" PASSWD="Your_Password" --network="host" puppeteer_linkchecker
```
enjoy ;-)

