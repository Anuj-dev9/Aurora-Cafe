from PIL import Image
import os

img = Image.open('home.png')

# 1. Logo
logo = img.crop((24, 24, 74, 84))
logo.save('public/assets/cropped/logo.png')

# 2. Products at the bottom
y1 = 770
y2 = 916
w = 278
gap = 22
start_x = 60

for i in range(5):
    x1 = start_x + i * (w + gap)
    x2 = x1 + w
    card_img = img.crop((x1, y1, x2, y2))
    card_img.save(f'public/assets/cropped/product_{i+1}.png')

# 3. Feature Icons
y1_f = 610
y2_f = 675
w_f = 60
gap_f = 220
start_x_f = 100

for i in range(5):
    x1 = start_x_f + i * (w_f + gap_f)
    x2 = x1 + w_f
    feat_img = img.crop((x1, y1_f, x2, y2_f))
    feat_img.save(f'public/assets/cropped/feature_{i+1}.png')

print("Cropped successfully!")
