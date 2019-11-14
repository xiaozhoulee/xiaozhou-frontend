### 学生管理

#### 联查

###### 接口功能
> 查寻学生

###### HTTP请求方式
> get

###### URL
> /getstudent

###### 支持格式
> JSON

###### 返回参数
|返回字段|字段类型|说明|
|-|-|-|
|code|int|返回结果状态 20000 和 30000 |
|data|string|返回结果状态 studentList 和 失败|

###### 接口实例
> [http://127.0.0.1:7001/getstudent](http://127.0.0.1:7001/getstudent)

```
    "code": 20000,
    "data": [
        {
            "id": 1,
            "studentname": "张三",
            "sex": "男",
            "age": "13",
            "createdAt": "2019-11-05T00:05:09.000Z",
            "updatedAt": "2019-11-05T00:05:09.000Z"
        }
```

#### 添加

###### 接口功能
> 添加学生

###### HTTP请求方式
> post

###### URL
> /insertstudent

###### 支持格式
> JSON

###### 请求参数
|参数|必选|类型|说明|
|-|-|-|-|
|studentname|true|string|新增的学生名称|
|studentsex|true|string|新增的学生性别|
|studentage|true|string|新增的学生年龄|
|clazz_id|true|int|新增的学生班级|

###### 返回参数
|返回字段|字段类型|说明|
|-|-|-|
|code|int|返回结果状态 20000 和 30000 |
|data|string|返回结果状态 studentList 和 失败|

###### 接口实例
> [http://127.0.0.1:7001/insertclazz](http://127.0.0.1:7001/insertclazz)

```
    "code": 20000,
    "data": [
        {
            "id": 1,
            "studentname": "张三",
            "sex": "男",
            "age": "13",
            "createdAt": "2019-11-05T00:05:09.000Z",
            "updatedAt": "2019-11-05T00:05:09.000Z"

            "id": 2,
            "studentname": "李四",
            "sex": "男",
            "age": "18",
            "createdAt": "2019-11-05T00:05:09.000Z",
            "updatedAt": "2019-11-05T00:05:09.000Z"
        }
```

#### 删除

###### 接口功能
> 删除学生

###### HTTP请求方式
> delete

###### URL
> /deletestudent

###### 支持格式
> JSON

###### 请求参数
|参数|必选|类型|说明|
|-|-|-|-|
|id|true|string|删除的学生id|

###### 返回参数
|返回字段|字段类型|说明|
|-|-|-|
|code|int|返回结果状态 20000 和 30000 |
|data|string|返回结果状态 studentList 和 失败|

###### 接口实例
> [http://127.0.0.1:7001/deletestudent](http://127.0.0.1:7001/deletestudent)

```
    "code": 20000,
    "data": [
        {
            "id": 1,
            "studentname": "张三",
            "sex": "男",
            "age": "13",
            "createdAt": "2019-11-05T00:05:09.000Z",
            "updatedAt": "2019-11-05T00:05:09.000Z"
        }
```

#### 修改

###### 接口功能
> 修改学生

###### HTTP请求方式
> put

###### URL
> /putstudent

###### 支持格式
> JSON

###### 请求参数
|参数|必选|类型|说明|
|-|-|-|-|
|studentname|true|string|修改的学生名称|
|studentsex|true|string|修改的学生性别|
|studentage|true|string|修改的学生年龄|
|clazz_id|true|int|修改的学生班级|

###### 返回参数
|返回字段|字段类型|说明|
|-|-|-|
|code|int|返回结果状态 20000 和 30000 |
|data|string|返回结果状态 studentList 和 失败|

###### 接口实例
> [http://127.0.0.1:7001/putstudent](http://127.0.0.1:7001/putstudent)

```
    "code": 20000,
    "data": [
        {
            "id": 1,
            "studentname": "李三",
            "sex": "男",
            "age": "17",
            "createdAt": "2019-11-05T00:05:09.000Z",
            "updatedAt": "2019-11-05T00:05:09.000Z"
        }
```