/*******************************

脚本功能：完美4K影视——解锁VIP
下载地址：https://t.me/py996
软件版本：5.1.0
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http://111.229.140.167:8762/apptov5/v1/vod/getVod url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wm4k.js



[mitm] 

hostname = 111.229.140.167

*******************************/

var body = $response.body.replace(/isVip":\d+/g,'isVip":1')
.replace(/is_free":\w+/g,'is_free":true')
$done({ body });
