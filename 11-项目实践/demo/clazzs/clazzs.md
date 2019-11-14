### 班级管理

#### 联查

###### 接口功能
> 查找

###### HTTP请求方式
> get

###### URL
> /getclazz

###### 支持格式
> JSON

###### 返回参数
|返回字段|字段类型|说明|
|-|-|-|
|code|int|返回结果状态 20000 和 30000 |
|data|string|返回结果状态 clazzList 和 失败|

###### 接口实例
> [http://127.0.0.1:7001/getclazz](http://127.0.0.1:7001/getclazz)

```
    "code": 20000,
    "data": [
        {
            "id": 1,
            "clazzname": "123",
            "createdAt": "2019-11-05T00:05:09.000Z",
            "updatedAt": "2019-11-05T00:05:09.000Z"
        }
```

#### 添加

###### 接口功能
> 添加班级

###### HTTP请求方式
> post

###### URL
> /insertclazz

###### 支持格式
> JSON

###### 请求参数
|参数|必选|类型|说明|
|-|-|-|-|
|name|true|string|新增的班级名称|

###### 返回参数
|返回字段|字段类型|说明|
|-|-|-|
|code|int|返回结果状态 20000 和 30000 |
|data|string|返回结果状态 clazzList 和 失败|

###### 接口实例
> [http://127.0.0.1:7001/insertclazz](http://127.0.0.1:7001/insertclazz)

```
    "code": 20000,
    "data": [
        {
            "id": 1,
            "clazzname": "初三(1)班",
            "createdAt": "2019-11-05T00:05:09.000Z",
            "updatedAt": "2019-11-05T00:05:09.000Z",

            "id": 2,
            "clazzname": "初三(2)班",
            "createdAt": "2019-11-05T00:05:09.000Z",
            "updatedAt": "2019-11-05T00:05:09.000Z",
            
        }
```

#### 删除

###### 接口功能
> 删除班级

###### HTTP请求方式
> delete

###### URL
> /deleteclazz

###### 支持格式
> JSON

###### 请求参数
|参数|必选|类型|说明|
|-|-|-|-|
|id|true|string|删除的班级id|

###### 返回参数
|返回字段|字段类型|说明|
|-|-|-|
|code|int|返回结果状态 20000 和 30000 |
|data|string|返回结果状态 clazzList 和 失败|

###### 接口实例
> [http://127.0.0.1:7001/deleteclazz](http://127.0.0.1:7001/deleteclazz)

```
    "code": 20000,
    "data": [
        {
            "id": 1,
            "clazzname": "初三(1)班",
            "createdAt": "2019-11-05T00:05:09.000Z",
            "updatedAt": "2019-11-05T00:05:09.000Z",
        }
```

#### 修改

###### 接口功能
> 修改班级

###### HTTP请求方式
> put

###### URL
> /putclazz

###### 支持格式
> JSON

###### 请求参数
|参数|必选|类型|说明|
|-|-|-|-|
|id|true|string|需要修改的班级id|
|putclazzname|true|string|修改后的班级名称|

###### 返回参数
|返回字段|字段类型|说明|
|-|-|-|
|code|int|返回结果状态 20000 和 30000 |
|data|string|返回结果状态 clazzList 和 失败|

###### 接口实例
> [http://127.0.0.1:7001/putclazz](http://127.0.0.1:7001/putclazz)

```
    "code": 20000,
    "data": [
        {
            "id": 1,
            "clazzname": "初三(4)班",
            "createdAt": "2019-11-05T00:05:09.000Z",
            "updatedAt": "2019-11-05T00:05:09.000Z",
        }
```