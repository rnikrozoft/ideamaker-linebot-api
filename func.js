function handleEvent(event, channel) {
    if (event.type == 'follow' || event.type == 'message' || event.message.type == 'text') {

        var echo = [{
            "type": "template",
            "altText": "ไอเดียเมกเกอร์ยินดีต้อนรับ",
            "template": {
                "type": "buttons",
                "thumbnailImageUrl": "https://ideasmaker.org/wp-content/uploads/2020/07/shop.jpg",
                "title": "ยินดีต้อนรับสู่ไอเดียเมกเกอร์",
                "text": "ผู้เชี่ยวชาญด้านการตลาด สื่อโฆษณา ร้านป้าย ทั้งออนไลน์...",
                "actions": [{
                        "type": "message",
                        "label": "สนใจพิมพ์ไวนิล",
                        "text": "สนใจพิมพ์ไวนิล"
                    },
                    {
                        "type": "message",
                        "label": "สนใจสติ๊กเกอร์",
                        "text": "สนใจสติ๊กเกอร์"
                    },
                    {
                        "type": "message",
                        "label": "สนใจตรายาง",
                        "text": "สนใจตรายาง"
                    },
                    {
                        "type": "message",
                        "label": "สนใจสินค้าอื่นๆ",
                        "text": "สนใจสินค้าอื่นๆ"
                    }
                ]
            }
        }, {
            "type": "template",
            "altText": "ไอเดียเมกเกอร์ยินดีต้อนรับ",
            "template": {
                "type": "buttons",
                "thumbnailImageUrl": "https://ideasmaker.org/wp-content/uploads/2021/12/png-1.png",
                "title": "สอบถามข้อมูล",
                "text": "คุณสนใจข้อมูลอะไร",
                "actions": [{
                        "type": "message",
                        "label": "การจัดส่งไฟล์งาน",
                        "text": "การจัดส่งไฟล์งาน"
                    },
                    {
                        "type": "message",
                        "label": "บริษัทอยู่ที่ไหน",
                        "text": "บริษัทอยู่ที่ไหน"
                    },
                    {
                        "type": "message",
                        "label": "กลับไปหน้าแรก",
                        "text": "กลับไปหน้าแรก"
                    }
                ]
            }
        }];

        if (event.message.text == 'สนใจพิมพ์ไวนิล') {
            var echo = [{
                "type": "image",
                "originalContentUrl": "https://ideasmaker.org/wp-content/uploads/2020/09/720DPI-1024x525.jpg",
                "previewImageUrl": "https://ideasmaker.org/wp-content/uploads/2020/09/720DPI-1024x525.jpg"
            }, {
                "type": "text",
                "text": "ไวนิลมีขั้นต่ำการผลิตอยู่ที่ 150 บาท /ต่อชิ้น  ไวนิลราคารวมพับขอบตอกตาไก่แล้ว ระยะเวลาผลิต 1-2 วัน\n\n- ราคาไวนิลความละเอียด 720 dpi ตรม.ละ 150 บาท (ขนาด 1*1 เมตร)\n- หรือความละเอียด 1440dpi ราคาตรม.ละ 250 บาท  (ขนาด 1*1 เมตร)\n\nเหมาะสำหรับไวนิลที่มีรูปภาพ ที่ต้องการความคมชัด พวกภาพถ่าย หรืออาหารที่น่ารับประทาน\nกรณีต้องการเชคราคาด้วยตัวเอง สามารถเช็คราคาด้วยตัวเอง ได้ที่นี่ครับ https://ideasmaker.org/82 "
            }];
        }

        if (event.message.text == 'สนใจสติ๊กเกอร์') {
            var echo = [{
                "type": "image",
                "originalContentUrl": "https://ideasmaker.org/wp-content/uploads/2020/04/86403060_3010788162267458_3701254845479518208_o.jpg",
                "previewImageUrl": "https://ideasmaker.org/wp-content/uploads/2020/04/86403060_3010788162267458_3701254845479518208_o.jpg"
            }, {
                "type": "text",
                "text": "ทางร้านมีเครื่องพิมพ์ 2 แบบ \n1. เครื่อง  Allwin 1440 dpi เครื่องไต้หวัน/หมึกไต้หวัน  ตรมละ 350 บาท ต่อ ตรม  ชนิดกันน้ำเนื้อ PVC เงา ฉีกไม่ขาด คุณภาพงานพิมพ์คุณภาพดี ✨ //กรณีไดคัท บวกเพิ่ม 50 บาท\n\n2. เครื่องพิมพ์ MIMAKI  (มิมากิ) เครื่องญี่ปุ่น/หมึกญี่ปุ่น ตรมละ 450 บาท ต่อ ตรม . รวมไดคัท. ชนิดกันน้ำเนื้อ PVC ฉีกไม่ขาด เงา คุณภาพคมชัด ให้สีที่ตรงกับหน้าจอ ✨✨ // กรณีไดคัท บวกเพิ่ม 50 บาท \nหากมีโอกาสสามารถเข้ามาชมงานเปรียบเทียบกันได้ที่หน้าร้าน "
            }];
        }

        if (event.message.text == 'สนใจสินค้าอื่นๆ' || event.message.text == 'สนใจตรายาง') {
            var echo = [{
                "type": "text",
                "text": "ยังไม่มีข้อมูล"
            }];
        }

        if (event.message.text == 'การจัดส่งไฟล์งาน') {
            var echo = [{
                "type": "text",
                "text": "- ไฟล์งานรองรับ  JPG/PDF /TIFF /AI/WORD/POWER POINT  โหมด CMYK กรณีส่งไฟล์ไม่ได้ ให้ส่งเข้าเมลล์ idea@idea-maker.com \n\n- หรือสามารถอัพโหลดไฟล์งานผ่านเว็บไซต์ ที่นี่  https://ideasmaker.org/2533/upload_file\n"
            }, {
                "type": "text",
                "text": "👏 สนค้าไม่รวมจัดส่ง และ สินค้าราคาไม่รวม vat (กรณีเอา vat) กทม. มีบริการแกรบหรือวินจัดส่ง เก็บปลายทางกับลูกค้า พร้อมทั้งแจ้งสถานที่จัดส่ง พร้อมเบอร์มือถือผู้รับงานและต่างจังหวัดใช้ DHL จัดส่งคะ 🙏🏻✨"
            }];
        }

        if (event.message.text == 'บริษัทอยู่ที่ไหน') {
            var echo = [{
                "type": "location",
                "title": "ไอเดียเมกเกอร์",
                "address": "4793 ถนนประชาสงเคราะห์ หรือ ไอเดียเมกเกอร์  ดินแดง (อย่าลืมเว้นวรรคเลขที่ กับ ถนน ) ",
                "latitude": 13.771764,
                "longitude": 100.56013715
            }];
        }
        // var result = echo[Math.floor(Math.random() * echo.length)];
        return channel.replyMessage(event.replyToken, echo);
    } else {
        return Promise.resolve(null);
    }
}

module.exports = { handleEvent };