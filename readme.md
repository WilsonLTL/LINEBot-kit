# LINEBot-kit
## A micro service for line bot
![image](https://i.imgur.com/SND67kP.png)
```url
Richmenu: https://events.line.me/tw/lineat/minisite/wp-content/themes/line/download.php
Reply: https://medium.com/pyradise/使用node-js建置你的第一個line-bot-590b7ba7a28a
Push message: https://www.oxxostudio.tw/articles/201806/line-push-message.html
```

## Folder tree
```text
|--routes
|    |--line_bot
|    |      |--index.js
|    |      |--handlers
|    |      |     |--linewebhook.js
|    |      |     |--push_message.js          
|--.env
|--.gitlab-ci.yml
|--app.js
|--Dockerfile
|--package.json
|--package-loac.json
|--readme.md
```

## Environment setting
```text
1. Using ssh and enter to the new environment:
    - sudo apt-get update
    - sudo apt install docker.io
2. Pull the newest version of Docker image and run it , check it's the service online
    - docker login registry.example.com -u wilsonlo1997@gmail.com -p e63LVHtsjTz5CzcSj6Yi  
    - docker pull registry.gitlab.com/asiabots/wilson/line_bot_api
    - sudo docker run -d -p 80:80 registry.gitlab.com/asiabots/wilson/line_bot_api
    - docker logs docker_container_id
3. Install ngrok for https access
    - sudo apt-get install unzip wget
    - wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip
    - unzip ./ngrok-stable-linux-amd64.zip
    - ./ngrok authtoken eGbiR4ue13atmuk1Gd78_5LSVKDJGMQA3soA4wzPAb    
4. Auto setting
    - cd /usr/sbin
    - sudo touch api.sh
    - sudo chown root:root api.sh
    - sudo chmod +x api.sh
    - sudo nano api.sh
      code in api.sh:
          - cd /home/$USER
          - sudo docker run -d -p 80:80 registry.gitlab.com/asiabots/wilson/line_bot_api
          - sudo ngrok http 80
    - crontab -e
        - @reboot /usr/sbin/api.sh
 5. LINEBot setting
    - Create a new LINEBot and copy the channelID, secret and access token
    - Enter ngrok website, login bt google account (linebotngrok@gmail.com, asiabots18841884)
    - Enter status, copy the httpsurl, paste it in LINEBot Webhook URL e.g https://333498e7.ngrok.io/line_bot/linewebhook
```
## LINEBot QR code
![QRCODE](https://i.imgur.com/6jSmB6T.png)

## LINE Login
![image](https://i.imgur.com/t28VdhV.png)
```text
1. Open LINE developer,select LINE login service.
2. Modify Login url : https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id={channel_id}redirect_uri={redirect_url}&scope=openid%20profile&state=abcde
3. Create a LINE login button in your application , which should follow the format.
4. Action of Login button should be the Login url.
5. When user accept login, it will return a access tokem (expire day:30), to let you access user profile, then you can save it into your database.
```

## Message API
[Video tutorial](https://www.youtube.com/watch?v=3J3ne9D8whU)
```
1. create your own line bot and get information : channel id, channel secret, channel access token
2. modify .env file parameter : line_bot_channelid, line_bot_channel_secret, line_bot_channel_access_token
3. run app.js
```

## LINE Rich Menu
** Rich menu only active in mobile version ** <br >
```text
1. Create a new rich menu (API 5.)
2. Upload rich menu image (API 7.)
3. Select and active rich menu (API 8.)
PS: The image size should be fix to 2500 * 843 or 2500 * 1686
```

## API list
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/ebb182e53d08d766e970) <br >
** Access token is the line  bot access token ** <br >
1. List all rich menu <br >
method: GET <br >
url: https://api.line.me/v2/bot/richmenu/list <br >
authorization：bearer token <br >

2. View the target rich menu <br >
method: GET <br >
url：https://api.line.me/v2/bot/richmenu/{rich-menu-id} <br >
Authorization：Bearer Token

3. View the group of the target rich menu <br >
method: GET <br >
url: https://api.line.me/v2/bot/user/all/richmenu <br >
Authorization：Bearer Token <br >

4. Download the target rich menu image <br >
method: GET <br >
url: https://api.line.me/v2/bot/richmenu/{rich-menu-id}/content <br >
Authorization：Bearer Token

4. Delete the rich menu <br >
method: DELETE <br >
url：https://api.line.me/v2/bot/richmenu/{rich-menu-id} <br >
Authorization：Bearer Token

5. Create a new rich menu <br >
method: POST <br >
url: https://api.line.me/v2/bot/richmenu <br >
Authorization：Bearer Token <br >
Request: <br >
```json
{
    "size": {
      "width": 2500,
      "height": 843
    },
    "selected": false,
    "name": "richmenu-demo-1",
    "chatBarText": "LINE圖文選單範例",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 833,
          "height": 843
        },
        "action": {
          "type": "message",
          "label": "文字",
          "text": "Hello, World!"
        }
      },
      {
        "bounds": {
          "x": 833,
          "y": 0,
          "width": 833,
          "height": 843
        },
        "action": {
          "type": "uri",
          "label": "網址",
          "uri": "https://medium.com/@augustus0818/line-bot-rich-menu-aa5fa67ac6ae"
        }
      },
      {
        "bounds": {
          "x": 1666,
          "y": 0,
          "width": 833,
          "height": 843
        },
        "action": {
          "type": "location",
          "label": "位置"
        }
      }
   ]
}
```
Response: <br>
```json
{
    "richMenuId": "richmenu-34bbaca71175643b937ef06739c380b6"
}
```

7. Update the rich menu image <br >
method: POST <br >
url: https://api.line.me/v2/bot/richmenu/{rich-menu-id}/content <br >
Authorization：Bearer Token <br >
Content-Type: image/png <br >
Binary: image.png <br >
PS: must follow the size of api 5. <br >

8. Select the rich menu for all user <br >
method: POST <br >
url: https://api.line.me/v2/bot/user/all/richmenu/{rich-menu-id} <br >
Authorization：Bearer Token <br >
Response: <br>
```json
{}
```

9.Push message <br >
method: POST <br >
url: http://ec2-54-169-136-238.ap-southeast-1.compute.amazonaws.com/line_bot/push_message <br >
Request: <br >
```json
{
	"userID":"Uc0f456a6fcac97db81a5d4df556f89ff",
	"message":"Yoooooooooooooooooooooo"
}
```
Response: <br >
```json
{
    "status": true
}
```