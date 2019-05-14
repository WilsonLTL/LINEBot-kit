# line_bot_api
A micro service for line bot <br >
Ref:
```url
Richmenu: https://events.line.me/tw/lineat/minisite/wp-content/themes/line/download.php
```

## message api
```
1. create your own line bot and get information : channel id, channel secret, channel access token
2. modify .env file parameter : line_bot_channelid, line_bot_channel_secret, line_bot_channel_access_token
3. run app.js
```

##api
** Access token is the line  bot access token <br >
1. List all rich menu <br >
method: GET <br >
url: https://api.line.me/v2/bot/richmenu/list <br >
authorization：bearer token <br >

2. View the target rich menu <br >
method: GET <br >
url：https://api.line.me/v2/bot/richmenu/{rich menu id} <br >
Authorization：Bearer Token

3. View the group of the target rich menu <br >
method: GET <br >
url: https://api.line.me/v2/bot/user/all/richmenu <br >
Authorization：Bearer Token <br >

4. Download the target rich menu image <br >
method: GET <br >
url: https://api.line.me/v2/bot/richmenu/{rich menu id}/content <br >
Authorization：Bearer Token

4. Delete the rich menu <br >
method: DELETE <br >
url：https://api.line.me/v2/bot/richmenu/{rich menu id} <br >
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

6. Update the rich menu image
method: POST <br >
url https://api.line.me/v2/bot/richmenu/{richmenu-id}/content <br >
Authorization：Bearer Token <br >
Content-Type: image/png <br >
Binary: image.png <br >
PS: must follow the ize of api 5. <br >

7. Select the rich menu for all user
method: POST <br >
url: https://api.line.me/v2/bot/user/all/richmenu/{richmenu-id} <br >
Authorization：Bearer Token <br >
Response: <br>
```json
{}
```

8.Push message <br >
method: POST <br >
url: 0.0.0.0:3000/line_bot/push_message <br >
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