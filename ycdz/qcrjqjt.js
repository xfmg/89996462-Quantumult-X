/*******************************

脚本功能：青橙日记全家桶——解锁VIP
下载地址：https://is.gd/b8CVMR
软件版本：8.2
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/182.92.64.124\/MayDiaryOnLine\/login url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/qcrjqjt.js

[mitm] 

hostname = 182.92.64.124

*******************************/

var body = $response.body.replace(/vipInfo":"\d"/g,'vipInfo":"1"')
$done({ body });
