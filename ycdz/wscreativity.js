/*******************************

脚本功能：面包拼图——解锁VIP
下载地址：https://is.gd/baksE0
软件版本：1.0.9
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/bread28resapi.wscreativity.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wscreativity.js

[mitm] 

hostname = bread28resapi.wscreativity.com

*******************************/

var body = $response.body.replace(/isValid":\d/g,'isValid":1')
.replace(/expiredTs":\d+/g,'expiredTs":8888888888000')
.replace(/vipType":\d/g,'vipType":1')
.replace(/nickname":".*?"/g,'nickname":"彭于晏Crack"')
$done({ body });
