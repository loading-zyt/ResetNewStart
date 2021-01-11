import pandas as pd
from pandas import DataFrame

data = {
    'ID': ['000001', '000002', '000003', '000004', '000005', '000006', ],
    'name': ['小张', '小王', '小李', '小红', '小米', '小菜', ],
    'gender': [True, False, True, False, True, False, ],
    'age': [16, 20, 18, 17, 18, 16, ],
    'height': [1.88, 1.81, 1.78, 1.74, 1.75, 1.76, ],
}

frame = pd.DataFrame(data)
print(frame)
print(frame['name'])
print(frame[['name', 'age']])
# 读取第[1,2)行数据
print(frame[1:2])
# 间隔两行读取第[1,6)行数据
print(frame[1:6:2])
# 读取index为1的数据
print(frame.loc[1])
# 读取index为[2,3]的数据
print(frame.loc[2:3])
print(frame.loc[2:3, ['ID', 'name']])
print(frame.loc[:, ['ID', 'name']])
print(frame.iloc[2:3, 0:3])
print(frame[frame['age'] > 17])
# print(frame([frame['age'] > 17]) & (frame['gender'] == True))
print(frame.rename(columns={'ID': '番号', 'name': '姓名'}))
