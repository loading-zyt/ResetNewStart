from PIL import Image
import pytesseract

pytesseract.pytesseract.tesseract_cmd = 'c://Program Files (x86)//Tesseract-OCR//tesseract.exe'

tessdata_dir_config = '--tessdata-dir "c://Program Files (x86)//Tesseract-OCR//tessdata"'

'''image = Image.open(r'D:\Program Files\Python27\Lib\site-packages\pytesseract\test.png')'''
text=pytesseract.image_to_string(Image.open('0_02.jpg'),lang='jpn',config=tessdata_dir_config)
print(text)