/*******************************

脚本功能：地震预警——解锁VIP
下载地址：https://is.gd/FfrmWZ
软件版本：2024.3.2
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/mobile-new.chinaeew.cn\/v1\/order\/apple\/vip url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/chinaeew.js

[mitm] 

hostname = mobile-new.chinaeew.cn

*******************************/

var body = $response.body.replace(/endTime":\d+/g,'endTime":8888888888000')
$done({ body });
